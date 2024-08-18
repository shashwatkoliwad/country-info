import React, { useState } from 'react';
import CountryList from './components/CountryList';
import SearchBar from './components/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Country Information</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CountryList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
