import { useEffect, useRef, useState } from 'react';
import './Status-Panel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleUserStatus } from './Status-Slice';

import hospitalImg from '/Icons/hospital.svg';
import promotionImg from '/Icons/promotion.svg';
import increaseImg from '/Icons/increase.svg';
import vacationImg from '/Icons/vacation.svg';

import { closePanel } from '../Status-Panel/Status-Slice';

const StatusPanel = ({ name, id }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { userStatuses } = useSelector((state) => state.statusSlice);

  const handleToggleStatus = (userId, icon) => {
    dispatch(toggleUserStatus({ userId, icon }));
  };

  // для кнопок на статус панели.
  const [orPromotion, setOrPromotion] = useState('');
  const [orIncrease, setOrIncrease] = useState('');
  const [orHospital, setOrHospital] = useState('');
  const [orVacation, setOrVacation] = useState('');

  function getStatusBtn(name, setstate, id) {
    const [searchState, setSearchState] = useState(0);

    useEffect(() => {
      if (Object.keys(userStatuses).length !== 0) {
        if (userStatuses[id]) {
          setSearchState(
            userStatuses[id].filter(
              (item) => item === `/employee_management_app/Icons/${name}.svg`
            ).length
          );
        }
      }
      localStorage.setItem('userStatus', JSON.stringify(userStatuses));
    }, [getStatusBtn]);

    useEffect(() => {
      setstate(
        searchState !== 0 ? (
          <div className="status-panel__status delete">Удалить</div>
        ) : (
          <div className="status-panel__status has">Добавить</div>
        )
      );
    }, [searchState]);
  }

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      dispatch(closePanel());
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // /
  
  const iconList = [
    {
      src: promotionImg,
      alt: 'ИДЁТ НА ПОВЫШЕНИЕ',
      btnState: orPromotion,
      addStatusBtn: getStatusBtn('promotion', setOrPromotion, id),
    },
    {
      src: hospitalImg,
      alt: 'НА БОЛЬНИЧНОМ',
      btnState: orHospital,
      addStatusBtn: getStatusBtn('hospital', setOrHospital, id),
    },
    {
      src: increaseImg,
      alt: 'ПРЕМИЮ ПОЛУЧИТ',
      btnState: orIncrease,
      addStatusBtn: getStatusBtn('increase', setOrIncrease, id),
    },
    {
      src: vacationImg,
      alt: 'В ОТПУСКЕ',
      btnState: orVacation,
      addStatusBtn: getStatusBtn('vacation', setOrVacation, id),
    },
  ];

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
              onClick={() => handleToggleStatus(id, item.src)}
            >
              <img src={item.src} alt={item.alt} />
              <h2>{item.alt}</h2>
            </button>
            {item.btnState}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusPanel;
