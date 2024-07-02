import { Component } from 'react';
import './Filter-list.scss';
import FilterItem from './Filter-item';

class FilterList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataFilterBtn } = this.props;

    const elements = dataFilterBtn.map((item, index) => {
      const { name, icon, active } = item;
      return <FilterItem name={name} icon={icon} active={active} key={index} />;
    });
    return (
      <div className="filter">
        <h2>Фильтр</h2>
        <div className="filter-btns">{elements}</div>
      </div>
    );
  }
}

export default FilterList;
