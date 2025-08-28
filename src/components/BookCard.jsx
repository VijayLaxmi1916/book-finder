import React from "react";

export default function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/160x220?text=No+Cover";

  const authors = (book.author_name || []).join(", ") || "Unknown author";
  const year = book.first_publish_year || "N/A";

  return (
    <article className="card" role="article">
      <div className="cover-wrap">
        <img className="cover" src={coverUrl} alt={`${book.title} cover`} loading="lazy" />
      </div>
      <h3 className="title" title={book.title}>{book.title}</h3>
      <p className="meta">{authors}</p>
      <p className="meta">📅 {year}</p>
      <a
        className="link"
        href={`https://openlibrary.org${book.key}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open details for ${book.title} on Open Library`}
      >
        View on Open Library ↗
      </a>
    </article>
  );
}
