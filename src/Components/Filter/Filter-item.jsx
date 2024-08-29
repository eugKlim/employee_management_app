import { useContext } from 'react';
import { StatusContext } from '../Status-Panel/StatusContext';
import { SearchContext } from '../Search/Search-Context';

const FilterItem = ({
  name,
  icon,
  statuses,
  active,
  index,
  giveFilterBtnActive,
}) => {
  const { users } = useContext(SearchContext);
  const { userStatuses, setFilteredUsers } = useContext(StatusContext);

  const filter = (e) => {
    const getDataAtt = e.currentTarget.dataset.status;
    if (getDataAtt !== 'all-people') {
      const filterStatuses = Object.entries(userStatuses).filter(
        ([key, value]) => value.some((value) => value.includes(getDataAtt))
      );

      const filterUserId = users.filter((user) =>
        filterStatuses.some((idArray) => idArray.includes(String(user.id)))
      );
      setFilteredUsers(filterUserId);
    } else {
      setFilteredUsers(users);
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
