import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>
        ОШИБКА <span>404</span>
      </h2>
      <h3>Страница не найдена!</h3>
      <Link to={'/home'}>
        <button className="goToHome">На главную</button>
      </Link>
    </div>
  );
};

export default NotFound;
