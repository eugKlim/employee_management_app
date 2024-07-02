import { Component } from 'react';

class EmploeeListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, image } = this.props;
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
                <button className="employee-list__item-info__btn">
                  Вся информация
                </button>
              </div>
            </div>
            <button className="employee-list__actions">
              <span>...</span>
            </button>
          </div>
          <div className="employee-list__item-status">
            <h2>Статус сотрудника:</h2>
            <div className="employee-list__item-status__icons">
              <img src="../../../public/Icons/promotion.svg" alt="" />
              <img src="../../../public/Icons/hospital.svg" alt="" />
              <img src="../../../public/Icons/increase.svg" alt="" />
            </div>
          </div>
        </li>
      </>
    );
  }
}

export default EmploeeListItem;
