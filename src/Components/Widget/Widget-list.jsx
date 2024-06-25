import WidgetItems from './Widget-items';
import './Widget.scss';

const Widget = ({ dataWidget }) => {
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
