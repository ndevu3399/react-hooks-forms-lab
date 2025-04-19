// src/components/Filter.js
import React from 'react';

function Filter({ search, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Filter;
