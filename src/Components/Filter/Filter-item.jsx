import { Component } from 'react';

class FilterItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, icon, active } = this.props;
    return (
      <>
        <button className={active}>
          <img src={icon} alt="Icon" /> {name}
        </button>
      </>
    );
  }
}

export default FilterItem;
