import './Search.scss';
import { useSelector, useDispatch } from 'react-redux';
import { searchUser } from '../Employee-list/Employee-Slice';

const Search = () => {
  const { search } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск сотрудника"
        value={search}
        onChange={(e) => dispatch(searchUser(e.target.value))}
      />
    </div>
  );
};

export default Search;
