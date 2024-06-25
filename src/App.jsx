import { Component } from 'react';
import Widget from './Components/Widget/Widget-list';
import EmployeeList from './Components/Employee-list/Employee-list';
import Form from './Components/Form/Form';
import Filter from './Components/Filter/Filter-list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataWidget: [
        {
          name: 'В ОТПУСКЕ:',
          icon: '/Icons/vacation.svg',
          count: '0',
        },
        {
          name: 'ИДУТ НА ПОВЫШЕНИЕ ДОЛЖНОСТИ:',
          icon: '/Icons/promotion.svg',
          count: '0',
        },
        {
          name: 'НА БОЛЬНИЧНОМ:',
          icon: '/Icons/hospital.svg',
          count: '0',
        },
        {
          name: 'ПРЕМИЮ ПОЛУЧАТ:',
          icon: '/Icons/increase.svg',
          count: '0',
        },
        {
          name: 'СОТРУДНИКОВ В КОМПАНИИ:',
          icon: '/Icons/people.svg',
          count: '0',
        },
      ],
      // filter
      dataFilterBtn: [
        {
          name: 'Все',
          icon: '/Icons/people.svg',
          active: 'active',
        },
        {
          name: 'В отпуске',
          icon: '/Icons/vacation.svg',
          active: 'false',
        },
        {
          name: 'Идут на повышение',
          icon: '/Icons/promotion.svg',
          active: 'false',
        },
        {
          name: 'На больничном',
          icon: '/Icons/hospital.svg',
          active: 'false',
        },
        {
          name: 'Премию получат',
          icon: '/Icons/increase.svg',
          active: 'false',
        },
      ],
      dataUsers: [
        {
          name: 'Karl Johnsonewgfqergfe2',
          image: 'Фото',
        },
      ],
    };
  }

  render() {
    const { dataWidget, dataFilterBtn, dataUsers } = this.state;
    dataWidget.sort((a, b) => a.name.length - b.name.length);
    return (
      <div className="container">
        <aside className="sidebar">
          <Filter dataFilterBtn={dataFilterBtn} />
          <Widget dataWidget={dataWidget} />
          <Form />
        </aside>
        <section className="content">
          <EmployeeList dataUsers={dataUsers} />
        </section>
      </div>
    );
  }
}

export default App;
