import React, { useEffect, useRef, useState, FC } from 'react';
import './Status-Panel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleUserStatus, closePanel } from './Status-Slice';

import hospitalImg from '/Icons/hospital.svg';
import promotionImg from '/Icons/promotion.svg';
import increaseImg from '/Icons/increase.svg';
import vacationImg from '/Icons/vacation.svg';

interface StatusPanelProps {
  name: string;
  id: string | number;
}

interface RootState {
  statusSlice: {
    userStatuses: Record<string, string[]>;
  };
}

const StatusPanel: FC<StatusPanelProps> = ({ name, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { userStatuses } = useSelector((state: RootState) => state.statusSlice);

  const handleToggleStatus = (userId: string, icon: string) => {
    dispatch(toggleUserStatus({ userId, icon }));
  };

  const [orPromotion, setOrPromotion] = useState<JSX.Element | string>('');
  const [orIncrease, setOrIncrease] = useState<JSX.Element | string>('');
  const [orHospital, setOrHospital] = useState<JSX.Element | string>('');
  const [orVacation, setOrVacation] = useState<JSX.Element | string>('');

  function getStatusBtn(
    name: string,
    setState: React.Dispatch<React.SetStateAction<JSX.Element | string>>,
    id: string | number
  ) {
    const [searchState, setSearchState] = useState<number>(0);

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
    }, [userStatuses, id, name]);

    useEffect(() => {
      setState(
        searchState !== 0 ? (
          <div className="status-panel__status delete">Удалить</div>
        ) : (
          <div className="status-panel__status has">Добавить</div>
        )
      );
    }, [searchState, setState]);
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      dispatch(closePanel());
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
      <div
        className="status-panel__close"
        onClick={() => dispatch(closePanel())}
      >
        &#10006;
      </div>
      <div className="status-panel__btns">
        {iconList.map((item) => (
          <div className="status-panel__btn" key={item.alt}>
            <button
              data-btn={item.src}
              onClick={() => handleToggleStatus(id.toString(), item.src)}
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
