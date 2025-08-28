import React from "react";
import BookCard from "./BookCard.jsx";

export default function BookList({ books }) {
  if (!books?.length) return null;
  return (
    <div className="grid">
      {books.map((b, i) => (
        <BookCard key={b.key || i} book={b} />
      ))}
    </div>
  );
}
