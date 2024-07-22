import { useState, useEffect } from 'react';
import SearchContext from './Search-Context';

const SearchProvider = ({ children }) => {
  const [searchPeople, setSearchPeople] = useState('');

  const searchChange = (e) => {
    setSearchPeople(e.target.value);
  };
  return (
    <SearchContext.Provider value={{ searchChange, searchPeople }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
