import { useState, useContext } from 'react';
import Widget from '@/Components/Widget/Widget-list';
import EmployeeList from '@/Components/Employee-list/Employee-list';
import Filter from '@/Components/Filter/Filter-list';
import Search from '@/Components/Search/Search';

import { StatusContext } from '../../Components/Status-Panel/StatusContext';

const Home = () => {
  const { userStatuses } = useContext(StatusContext);

  function getCountStatus(name) {
    return Object.values(userStatuses)
      .flat()
      .filter((item) => item === `/employee_management_app/Icons/${name}`)
      .length;
  }

  const [countUsers, setCountUsers] = useState(0);
  const getCountIncrease = getCountStatus('increase.svg');
  const getCountPromotion = getCountStatus('promotion.svg');
  const getCountHospital = getCountStatus('hospital.svg');
  const getCountVacation = getCountStatus('vacation.svg');

  // data
  const dataWidget = [
    {
      name: 'В ОТПУСКЕ:',
      icon: 'Icons/vacation.svg',
      count: getCountVacation,
    },
    {
      name: 'ИДУТ НА ПОВЫШЕНИЕ ДОЛЖНОСТИ:',
      icon: 'Icons/promotion.svg',
      count: getCountPromotion,
    },
    {
      name: 'НА БОЛЬНИЧНОМ:',
      icon: 'Icons/hospital.svg',
      count: getCountHospital,
    },
    {
      name: 'ПРЕМИЮ ПОЛУЧАТ:',
      icon: 'Icons/increase.svg',
      count: getCountIncrease,
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
  // / data

  dataWidget.sort((a, b) => a.name.length - b.name.length);
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="sidebar-inner">
          <Search />
          <Filter dataFilterBtn={dataFilterBtn} />
          <Widget dataWidget={dataWidget} />
        </div>
      </aside>
      <section className="content">
        <EmployeeList setCountUsers={setCountUsers} />
      </section>
    </div>
  );
};

export default Home;
