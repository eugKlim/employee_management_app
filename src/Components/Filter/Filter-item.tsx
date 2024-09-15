import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterBtns } from '../Employee-list/Employee-Slice';
import { RootState, AppDispatch } from '../Store';

interface IFilterItem {
  name: string;
  icon: string;
  statuses: string;
  active: boolean;
  index: number;
  giveFilterBtnActive: (index: number) => void;
}

const FilterItem: React.FC<IFilterItem> = ({
  name,
  icon,
  statuses,
  active,
  index,
  giveFilterBtnActive,
}) => {
  const { users } = useSelector((state: RootState) => state.employee);
  const dispatch = useDispatch<AppDispatch>();
  const { userStatuses } = useSelector((state: RootState) => state.statusSlice);

  const filter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const getDataAtt = e.currentTarget.dataset.status;
    if (getDataAtt !== 'all-people') {
      const filterStatuses = Object.entries(userStatuses).filter(
        ([key, value]) =>
          (value as string[]).some((value) => value.includes(getDataAtt!))
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
