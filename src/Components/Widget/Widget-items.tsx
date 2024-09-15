import React from 'react';

interface IWidgetItems {
  name: string;
  count: number;
  icon: string;
}

const WidgetItems: React.FC<IWidgetItems> = ({ name, count, icon }) => {
  return (
    <div className="widget-item">
      <img src={icon} alt="icon" className="widget-item-ico" />
      <h2>{name}</h2>
      <span className="widget-num">{count}</span>
    </div>
  );
};

export default WidgetItems;
