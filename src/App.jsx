import { useState } from 'react';
import Widget from './Components/Widget/Widget-list';
import EmployeeList from './Components/Employee-list/Employee-list';
import Filter from './Components/Filter/Filter-list';

const App = () => {
  const [countUsers, setCountUsers] = useState(0);
  // data
  const dataWidget = [
    {
      name: 'В ОТПУСКЕ:',
      icon: 'Icons/vacation.svg',
      count: '0',
    },
    {
      name: 'ИДУТ НА ПОВЫШЕНИЕ ДОЛЖНОСТИ:',
      icon: 'Icons/promotion.svg',
      count: '0',
    },
    {
      name: 'НА БОЛЬНИЧНОМ:',
      icon: 'Icons/hospital.svg',
      count: '0',
    },
    {
      name: 'ПРЕМИЮ ПОЛУЧАТ:',
      icon: 'Icons/increase.svg',
      count: '0',
    },
    {
      name: 'СОТРУДНИКОВ В КОМПАНИИ:',
      icon: 'Icons/people.svg',
      count: countUsers,
    },
  ];
  // filter
  const dataFilterBtn = [
    {
      name: 'Все',
      icon: 'Icons/people.svg',
      active: 'active',
    },
    {
      name: 'В отпуске',
      icon: 'Icons/vacation.svg',
      active: '',
    },
    {
      name: 'Идут на повышение',
      icon: 'Icons/promotion.svg',
      active: '',
    },
    {
      name: 'На больничном',
      icon: 'Icons/hospital.svg',
      active: '',
    },
    {
      name: 'Премию получат',
      icon: 'Icons/increase.svg',
      active: '',
    },
  ];
  // / data

  dataWidget.sort((a, b) => a.name.length - b.name.length);
  return (
    <div className="container">
      <aside className="sidebar">
        <Filter dataFilterBtn={dataFilterBtn} />
        <Widget dataWidget={dataWidget} />
      </aside>
      <section className="content">
        <EmployeeList setCountUsers={setCountUsers} />
      </section>
    </div>
  );
};

export default App;
