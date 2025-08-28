import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form className="search" onSubmit={submit}>
      <input
        className="input"
        placeholder="Search books by title…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Search books by title"
      />
      <button className="button" type="submit">Search</button>
    </form>
  );
}
