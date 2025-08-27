import { useState } from "react";
import VideoBackground from "./background";
import SearchBar from "./search_bar";
import BookResults from "./bookresult";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await res.json();
      console.log("Books fetched:", data.docs?.length || 0);
      setBooks(data.docs || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <VideoBackground />
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchBooks} />
      {loading ? (
        <p style={{ color: "white", textAlign: "center" }}>Loading...</p>
      ) : books.length > 0 ? (
        <BookResults books={books} />
      ) : (
        <p style={{ color: "white", textAlign: "center" }}>No results yet.</p>
      )}
    </>
  );
}

export default App;
