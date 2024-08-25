import { Link } from 'react-router-dom';
import { StatusContext } from '../Status-Panel/StatusContext';
import { useContext } from 'react';
import StatusPanel from '../Status-Panel/Status-Panel';

import usePanelStatus from '../../hooks/usePanelStatus';

const EmploeeListItem = ({ name, image, id }) => {
  const { userStatuses } = useContext(StatusContext);

  const { isStatusPaneOpen, openPanel, closePanel } = usePanelStatus();

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
            onClick={() => openPanel()}
          >
            <span>...</span>
          </button>
        </div>
        <div className="employee-status">
          <h2>Статус сотрудника:</h2>
          <div className="employee-status__icons">
            {userStatuses[id]?.map((icon, index) => (
              <img key={index} src={icon} alt="user status" />
            ))}
          </div>

          {isStatusPaneOpen ? (
            <StatusPanel name={name} id={id} closePanel={closePanel} />
          ) : null}
        </div>
      </li>
    </>
  );
};

export default EmploeeListItem;
