import { useState, createContext } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchPeople, setSearchPeople] = useState('');
  const [users, setUsers] = useState([]);
  const searchChange = (e) => {
    setSearchPeople(e.target.value);
  };
  return (
    <SearchContext.Provider
      value={{ searchChange, searchPeople, users, setUsers }}
    >
      {children}
    </SearchContext.Provider>
  );
};
