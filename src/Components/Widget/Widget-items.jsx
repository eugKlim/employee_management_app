import { Component } from 'react';

class WidgetItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, count, icon } = this.props;
    return (
      <div className="widget-item">
        <img src={icon} alt="icon" className="widget-item-ico" />
        <h2>{name}</h2>
        <span className="widget-num">{count}</span>
      </div>
    );
  }
}

export default WidgetItems;
