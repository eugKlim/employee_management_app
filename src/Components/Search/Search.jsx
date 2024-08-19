import { useContext } from 'react';
import './Search.scss';
import { SearchContext } from './Search-Context';

const Search = () => {
  const { searchChange } = useContext(SearchContext);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск сотрудника"
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
