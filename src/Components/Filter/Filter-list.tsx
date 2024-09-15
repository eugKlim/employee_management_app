import { useEffect, useState } from 'react';
import FilterItem from './Filter-item';
import { useSelector } from 'react-redux';
import './Filter-list.scss';
import { RootState } from '../Store';

const dataFilterBtn = [
  {
    name: 'Все',
    icon: 'Icons/people.svg',
    statuses: 'all-people',
  },
  {
    name: 'В отпуске',
    icon: 'Icons/vacation.svg',
    statuses: 'vacation',
  },
  {
    name: 'Идут на повышение',
    icon: 'Icons/promotion.svg',
    statuses: 'promotion',
  },
  {
    name: 'На больничном',
    icon: 'Icons/hospital.svg',
    statuses: 'hospital',
  },
  {
    name: 'Премию получат',
    icon: 'Icons/increase.svg',
    statuses: 'increase',
  },
];

const FilterList = () => {
  const [activeBtnFilter, setActiveBtnFilter] = useState<number>(0);
  const { search } = useSelector((state: RootState) => state.employee);

  useEffect(() => {
    setActiveBtnFilter(0);
  }, [search]);

  const giveFilterBtnActive = (index: number) => {
    setActiveBtnFilter(index);
  };

  return (
    <div className="filter">
      <h2>Фильтр</h2>
      <div className="filter-btns">
        {dataFilterBtn.map((data, index) => (
          <FilterItem
            name={data.name}
            icon={data.icon}
            statuses={data.statuses}
            key={index}
            active={index === activeBtnFilter}
            giveFilterBtnActive={giveFilterBtnActive}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterList;
