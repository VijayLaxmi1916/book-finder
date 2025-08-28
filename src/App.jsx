import React, { useEffect, useMemo, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import BookList from "./components/BookList.jsx";

export default function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    year: "",
    author: "",
    sort: "relevance",
  });

  const handleSearch = async (q) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setQuery(trimmed);
    setLoading(true);
    setError("");
    try {
      const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(trimmed)}&limit=50`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      const docs = Array.isArray(data.docs) ? data.docs : [];
      if (docs.length === 0) {
        setError("No books found. Try another title.");
        setBooks([]);
      } else {
        setBooks(docs);
      }
    } catch (e) {
      console.error(e);
      setError("Something went wrong. Please try again.");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  const filtered = useMemo(() => {
    let result = books;
    if (filters.author) {
      const a = filters.author.toLowerCase();
      result = result.filter((b) => (b.author_name || []).join(" ").toLowerCase().includes(a));
    }
    if (filters.year) {
      result = result.filter((b) => String(b.first_publish_year || '').includes(filters.year));
    }
    if (filters.sort === "year-desc") {
      result = [...result].sort((a, b) => (b.first_publish_year || 0) - (a.first_publish_year || 0));
    } else if (filters.sort === "year-asc") {
      result = [...result].sort((a, b) => (a.first_publish_year || 0) - (b.first_publish_year || 0));
    } else if (filters.sort === "title") {
      result = [...result].sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } // default: relevance (API order)
    return result.slice(0, 40);
  }, [books, filters]);

  return (
    <div className="app">
      <header className="container">
        <h1>📚 Book Finder</h1>
        <p className="subtitle">Search Open Library by title. Frontend-only, responsive UI.</p>
        <SearchBar onSearch={handleSearch} />
        <div className="filters">
          <input
            className="input"
            placeholder="Filter by author"
            value={filters.author}
            onChange={(e) => setFilters((f) => ({ ...f, author: e.target.value }))}
          />
          <input
            className="input"
            placeholder="Filter by year (e.g., 1999)"
            value={filters.year}
            onChange={(e) => setFilters((f) => ({ ...f, year: e.target.value }))}
          />
          <select
            className="select"
            value={filters.sort}
            onChange={(e) => setFilters((f) => ({ ...f, sort: e.target.value }))}
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="year-desc">Sort: Year ↓</option>
            <option value="year-asc">Sort: Year ↑</option>
            <option value="title">Sort: Title A→Z</option>
          </select>
        </div>
      </header>

      <main className="container">
        {loading && <div className="status">Loading results…</div>}
        {error && <div className="status error">{error}</div>}
        {!loading && !error && filtered.length === 0 && query && (
          <div className="status">No results after filters. Try clearing filters.</div>
        )}
        <BookList books={filtered} />
      </main>

      <footer className="container footer">
        <span>Powered by Open Library</span>
        <a href="https://openlibrary.org/dev/docs/api/search" target="_blank" rel="noreferrer">API Docs</a>
      </footer>
    </div>
  );
}
