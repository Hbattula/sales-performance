import React, { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = ({ data, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onFilter({ searchTerm, priceRange });
  };

  const handlePriceChange = (event) => {
    const value = [0, Number(event.target.value)];
    setPriceRange(value);
    onFilter({ searchTerm, priceRange: value });
  };

  return (
    <div className="search-filter">
      <div className="search-input">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="price-range">
        <input 
          type="range" 
          min="0" 
          max="1000" 
          step="10"
          value={priceRange[1]} 
          onChange={handlePriceChange}
        />
        <span>${priceRange[0]} - ${priceRange[1]}</span>
      </div>
    </div>
  );
};

export default SearchFilter;
