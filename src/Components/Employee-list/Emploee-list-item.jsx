import { Link } from 'react-router-dom';

const EmploeeListItem = ({ name, image, id }) => {
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
                  </button>{' '}
                </Link>
              </div>
            </div>
          </div>
          <button className="employee-list__actions">
            <span>...</span>
          </button>
        </div>
        <div className="employee-status">
          <h2>Статус сотрудника:</h2>
          <div className="employee-status__icons">
            <img src="Icons/promotion.svg" alt="" />
            <img src="Icons/hospital.svg" alt="" />
            <img src="Icons/increase.svg" alt="" />
          </div>
        </div>
      </li>
    </>
  );
};

export default EmploeeListItem;
