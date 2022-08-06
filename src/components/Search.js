import React,{useState} from "react";

function Search({handleFilter}) {
  const [searchValue, setSearchValue] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    handleFilter(searchValue);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit"><span role="img" aria-label="Magnifying glass">🔍</span></button>
    </form>
  );
}

export default Search;
