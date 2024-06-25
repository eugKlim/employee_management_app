import { Component } from 'react';
import './Employee-list.scss';
import EmploeeListItem from './Emploee-list-item';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataUsers } = this.props;
    const elements = dataUsers.map((item, index) => {
      const { name, image } = item;
      return <EmploeeListItem name={name} image={image} key={index} />;
    });

    return (
      <div className="employee-list">
        <ul>{elements}</ul>
      </div>
    );
  }
}

export default EmployeeList;