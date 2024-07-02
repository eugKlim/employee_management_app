import { useEffect, useState } from 'react';
import axios from 'axios';
import './Employee-list.scss';
import EmploeeListItem from './Emploee-list-item';

const EmployeeList = ({ setCountUsers }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [images, setImage] = useState([]);
  useEffect(() => {
    const getUsersFunc = async () => {
      try {
        const countInfo = 11;
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        const getUsers = response.data.slice(0, countInfo);
        setUsers(getUsers);
        setCountUsers(getUsers.length);

        const userImagesResponse = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        const getUsersImage = userImagesResponse.data.slice(0, countInfo);
        setImage(getUsersImage);
      } catch (error) {
        alert('Ошибка получения данных:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getUsersFunc();
  }, []);

  return (
    <div className="employee-list">
      {isLoading ? (
        <img src="Icons/gif/loading.gif" alt="Loading..." className="loading" />
      ) : (
        <ul>
          {users.map((item, index) => (
            <EmploeeListItem
              name={item.name}
              image={images[index]?.thumbnailUrl}
              key={index}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
