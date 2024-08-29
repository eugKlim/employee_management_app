import { useContext, useEffect, useState } from 'react';
import './Filter-list.scss';
import FilterItem from './Filter-item';
import { SearchContext } from '../Search/Search-Context';

const FilterList = ({ dataFilterBtn }) => {
  const [activeBtnFilter, setActiveBtnFilter] = useState(0);
  const { searchPeople } = useContext(SearchContext);

  useEffect(() => {
    setActiveBtnFilter(0);
  }, [searchPeople]);

  const giveFilterBtnActive = (index) => {
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
