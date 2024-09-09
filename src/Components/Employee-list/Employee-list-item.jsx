import { Link } from 'react-router-dom';
import StatusPanel from '../Status-Panel/Status-Panel';
import { openPanel } from '../Status-Panel/Status-Slice';
import { useSelector, useDispatch } from 'react-redux';

const EmploeeListItem = ({ name, image, id }) => {
  const { userStatuses, isOpenStatusPanel, selectedUserId } = useSelector(
    (state) => state.statusSlice
  );
  const dispatch = useDispatch();

  return (
    <>
      <li className="employee-list__item">
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
              userStatuses[id]?.map((icon, index) => (
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
      </li>
    </>
  );
};

export default EmploeeListItem;
