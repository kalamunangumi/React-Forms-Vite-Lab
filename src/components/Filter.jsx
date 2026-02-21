import { useState} from "react";

function Filter({ onCategoryChange, onSearchChange }) {

  const [searchValue, setSearchValue] = useState("");

  function handleSearch (e) {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  }

  return (
    <div className="Filter">
      <input type="text" value={searchValue} name="search" onChange={handleSearch} placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;