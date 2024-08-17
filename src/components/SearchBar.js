import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <input
            type="text"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
    );
};

export default SearchBar;
