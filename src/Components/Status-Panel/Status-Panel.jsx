import { useContext, useEffect, useRef } from 'react';
import './Status-Panel.scss';
import { StatusContext } from '../Status-Panel/StatusContext';

import hospitalImg from '/Icons/hospital.svg';
import promotionImg from '/Icons/promotion.svg';
import increaseImg from '/Icons/increase.svg';
import vacationImg from '/Icons/vacation.svg';


const StatusPanel = ({ name, closePanel, id }) => {
  const { toggleUserStatus, userStatuses } = useContext(StatusContext);

  // const iconList = [
  //   { src: 'Icons/promotion.svg', alt: 'ИДЁТ НА ПОВЫШЕНИЕ' },
  //   { src: 'Icons/hospital.svg', alt: 'НА БОЛЬНИЧНОМ' },
  //   { src: 'Icons/increase.svg', alt: 'ПРЕМИЮ ПОЛУЧИТ' },
  //   { src: 'Icons/vacation.svg', alt: 'В ОТПУСКЕ' },
  // ];

  const iconList = [
    { src: promotionImg, alt: 'ИДЁТ НА ПОВЫШЕНИЕ' },
    { src: hospitalImg, alt: 'НА БОЛЬНИЧНОМ' },
    { src: increaseImg, alt: 'ПРЕМИЮ ПОЛУЧИТ' },
    { src: vacationImg, alt: 'В ОТПУСКЕ' },
  ];

  const ref = useRef();

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      closePanel();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="status-panel" ref={ref}>
      <div className="status-panel__name">
        <b>Редактировать статусы</b>: {name}
      </div>
      <div className="status-panel__close" onClick={() => closePanel()}>
        &#10006;
      </div>
      <div className="status-panel__btns">
        {iconList.map((item) => (
          <div className="status-panel__btn" key={item.alt}>
            <button
              data-btn={item.src}
              onClick={() => toggleUserStatus(id, item.src)}
            >
              <img src={item.src} alt={item.alt} />
              <h2>{item.alt}</h2>
            </button>
            <div className="status-panel__status has">Добавлено</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusPanel;
