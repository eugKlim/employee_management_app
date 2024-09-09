import WidgetItems from './Widget-items';
import { useSelector } from 'react-redux';
import './Widget.scss';

const Widget = () => {
  const { users } = useSelector((status) => status.employee);
  const { userStatuses } = useSelector((state) => state.statusSlice);

  function getCountStatus(name) {
    return Object.values(userStatuses)
      .flat()
      .filter((item) => item === `/employee_management_app/Icons/${name}`)
      .length;
  }

  const dataWidget = [
    {
      name: 'В ОТПУСКЕ:',
      icon: 'Icons/vacation.svg',
      count: getCountStatus('vacation.svg'),
    },
    {
      name: 'ИДУТ НА ПОВЫШЕНИЕ ДОЛЖНОСТИ:',
      icon: 'Icons/promotion.svg',
      count: getCountStatus('promotion.svg'),
    },
    {
      name: 'НА БОЛЬНИЧНОМ:',
      icon: 'Icons/hospital.svg',
      count: getCountStatus('hospital.svg'),
    },
    {
      name: 'ПРЕМИЮ ПОЛУЧАТ:',
      icon: 'Icons/increase.svg',
      count: getCountStatus('increase.svg'),
    },
    {
      name: 'СОТРУДНИКОВ В КОМПАНИИ:',
      icon: 'Icons/people.svg',
      count: users.length,
    },
  ];

  dataWidget.sort((a, b) => a.name.length - b.name.length);

  const elements = dataWidget.map((item, index) => {
    const { name, count, icon } = item;
    return <WidgetItems name={name} count={count} icon={icon} key={index} />;
  });
  return (
    <div className="widget">
      <div className="widget-inner">{elements}</div>
    </div>
  );
};

export default Widget;
