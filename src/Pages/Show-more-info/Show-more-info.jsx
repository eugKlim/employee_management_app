import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import './Show-more-info.scss';

const ShowMoreInfo = () => {
  const { id } = useParams();
  const [user, setUsers] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsersFunc = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (response.data) {
          setUsers(response.data);
        } else {
          navigate('*');
        }

        const userImagesResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        setImage(userImagesResponse.data);
      } catch (error) {
        navigate('*');
      } finally {
        setIsLoading(false);
      }
    };

    getUsersFunc();
  }, [id, navigate]);

  return (
    <div>
      {isLoading ? (
        <div className="">
          <img
            src="../Icons/gif/loading.gif"
            alt="Loading..."
            className="loading"
          />
        </div>
      ) : (
        <div className="showMoreInfo">
          <div className="showMoreInfo-inner">
            <div className="showMoreInfo-top">
              <img src={image.thumbnailUrl} alt="Image" />
              <h2>{user.name}</h2>
            </div>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Company:</strong> {user.company.name}
            </p>
            <p>
              <strong>Address:</strong> {user.address.street},{' '}
              {user.address.city}
            </p>
            <div className="showMoreInfo-status">
              <div className="employee-status">
                <h2>Статус сотрудника:</h2>
                <div className="employee-status__icons">
                  <img src="../Icons/promotion.svg" alt="" />
                  <img src="../Icons/hospital.svg" alt="" />
                  <img src="../Icons/increase.svg" alt="" />
                </div>
              </div>
              <button className="showMoreInfo-status__btn">
                Редактировать статус ⚙
              </button>
            </div>
            <Link to={`/home`}>
              <button className="goToHome">На главную</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowMoreInfo;
