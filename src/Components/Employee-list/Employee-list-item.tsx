import React from 'react';
import { Link } from 'react-router-dom';
import StatusPanel from '../Status-Panel/Status-Panel';
import { openPanel } from '../Status-Panel/Status-Slice';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../Store';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface IEmployeeItem {
  name: string;
  image: string;
  id: string;
}

const EmploeeListItem: React.FC<IEmployeeItem> = ({ name, image, id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { userStatuses, isOpenStatusPanel, selectedUserId } = useSelector(
    (state: RootState) => state.statusSlice
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <motion.li
        className="employee-list__item"
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="employee-list__item-inner">
          <div className="employee-list__item-user">
            <div className="employee-list__item-img">
              <img src={image} alt="image" />
            </div>
            <div className="employee-list__item-info">
              <p className="employee-list__item-name">{name}</p>
              <div>
                <Link to={`/user/${id}`}>
                  <button className="employee-list__item-info__btn">
                    Вся информация
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <button
            className="employee-list__actions"
            onClick={() => dispatch(openPanel(id))}
          >
            <span>...</span>
          </button>
        </div>
        <div className="employee-status">
          <h2>Статус сотрудника:</h2>
          <div className="employee-status__icons">
            {userStatuses[id]?.length ? (
              userStatuses[id]?.map((icon: string, index: number) => (
                <img key={index} src={icon} alt="user status" />
              ))
            ) : (
              <p className="employee-list__empty">Пусто</p>
            )}
          </div>

          {isOpenStatusPanel && selectedUserId === id ? (
            <StatusPanel name={name} id={id} />
          ) : null}
        </div>
      </motion.li>
    </>
  );
};

export default EmploeeListItem;
