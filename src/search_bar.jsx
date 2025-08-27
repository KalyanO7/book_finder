import './search_bar.css';

function SearchBar({ query, setQuery, onSearch }) {
    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Search books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
