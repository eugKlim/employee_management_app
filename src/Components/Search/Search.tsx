import './Search.scss';
import { useSelector, useDispatch } from 'react-redux';
import { searchUser } from '../Employee-list/Employee-Slice';
import { RootState, AppDispatch } from '../Store';

const Search = () => {
  const { search } = useSelector((state: RootState) => state.employee);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск сотрудника"
        value={search}
        onChange={(e) => dispatch(searchUser(e.target.value))}
        required
      />
    </div>
  );
};

export default Search;
