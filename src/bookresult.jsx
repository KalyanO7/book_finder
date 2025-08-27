/* eslint-disable react/prop-types */
import React from "react";
import "./bookresult.css";

export default function BookResults({ books }) {
    if (!books || books.length === 0) {
        console.log("No books found.");
        return <p className="no-results">No books found.</p>;
    }

    // Log only top 3 books
    console.log("Top 3 books:");
    books.slice(0, 3).forEach((book, index) => {
        console.log(
            `${index + 1}. Title: ${book.title}, Author: ${book.author_name ? book.author_name.join(", ") : "Unknown Author"
            }, Year: ${book.first_publish_year || "N/A"}`
        );
    });

    return (
        <div className="results-grid">
            {books.slice(0, 3).map((book, index) => {
                const coverUrl = book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : "https://placehold.co/150x200?text=No+Cover";

                return (
                    <div key={index} className="book-card">
                        <img src={coverUrl} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p className="authors">
                            {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
                        </p>
                        <p className="year">{book.first_publish_year || "N/A"}</p>
                    </div>
                );
            })}
        </div>
    );
}
