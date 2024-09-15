import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import StatusPanel from '../../Components/Status-Panel/Status-Panel';
import { openPanel } from '../../Components/Status-Panel/Status-Slice';
import { useSelector, useDispatch } from 'react-redux';
import './Show-more-info.scss';
import { RootState, AppDispatch } from '../../Components/Store';

interface IUser {
  id: number;
  name: string;
  email: string;
  phone: number;
  image: string;
  company: {
    name: string;
  };
  address: {
    street: string;
    city: string;
    zipcode: number;
  };
}

interface IImage {
  thumbnailUrl: string;
}

const ShowMoreInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const [user, setUsers] = useState<IUser | undefined>(undefined);
  const [image, setImage] = useState<IImage | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const userId = id ? id : '';

  const { userStatuses, isOpenStatusPanel, selectedUserId } = useSelector(
    (state: RootState) => state.statusSlice
  );

  useEffect(() => {
    const getUsersFunc = async () => {
      try {
        const response = await axios.get<IUser>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (response.data) {
          setUsers(response.data);
        } else {
          navigate('*');
        }

        const userImagesResponse = await axios.get<IImage>(
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
              <img src={image?.thumbnailUrl} alt="Image" />
              <h2>{user?.name}</h2>
            </div>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Phone:</strong> {user?.phone}
            </p>
            <p>
              <strong>Company:</strong> {user?.company.name}
            </p>
            <p>
              <strong>Address:</strong> {user?.address.street},
              {user?.address.city}
            </p>
            <p>
              <strong>ZipCode:</strong> {user?.address.zipcode}
            </p>
            <div className="showMoreInfo-status">
              <div className="employee-status">
                <h2>Статус сотрудника:</h2>
                <div className="employee-status__icons">
                  {userStatuses[userId]?.length ? (
                    userStatuses[userId]?.map((icon: string, index: number) => (
                      <img key={index} src={icon} alt="user status" />
                    ))
                  ) : (
                    <p className="employee-list__empty">Пусто</p>
                  )}
                </div>
              </div>
              <button
                className="showMoreInfo-status__btn"
                onClick={() => dispatch(openPanel(userId))}
              >
                Редактировать статус ⚙
              </button>
              {isOpenStatusPanel && selectedUserId === id ? (
                <StatusPanel name={user?.name!} id={id} />
              ) : null}
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
