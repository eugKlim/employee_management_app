import { useSelector, useDispatch } from 'react-redux';
import { filterBtns } from '../Employee-list/Employee-Slice';

const FilterItem = ({
  name,
  icon,
  statuses,
  active,
  index,
  giveFilterBtnActive,
}) => {
  const { users } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const { userStatuses } = useSelector((state) => state.statusSlice);

  const filter = (e) => {
    const getDataAtt = e.currentTarget.dataset.status;
    if (getDataAtt !== 'all-people') {
      const filterStatuses = Object.entries(userStatuses).filter(
        ([key, value]) => value.some((value) => value.includes(getDataAtt))
      );
      const filterUserId = users.filter((user) =>
        filterStatuses.some((idArray) => idArray.includes(String(user.id)))
      );
      dispatch(filterBtns(filterUserId));
    } else {
      dispatch(filterBtns(users));
    }

    giveFilterBtnActive(index);
  };

  return (
    <>
      <button
        className={active ? 'active' : ''}
        onClick={filter}
        data-status={statuses}
      >
        <img src={icon} alt="Icon" />
        {name}
      </button>
    </>
  );
};

export default FilterItem;
