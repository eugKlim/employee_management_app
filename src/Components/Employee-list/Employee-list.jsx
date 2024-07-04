import { useEffect, useState } from 'react';
import axios from 'axios';
import './Employee-list.scss';
import EmploeeListItem from './Emploee-list-item';

import { Link } from 'react-router-dom';

const EmployeeList = ({ setCountUsers }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [images, setImage] = useState([]);
  useEffect(() => {
    const getUsersFunc = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data);
        setCountUsers(response.data.length);

        const userImagesResponse = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        setImage(userImagesResponse.data);
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
              id={index + 1}
              key={index}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;

/*

        <ul>
          {users.map((item, index) => (
            <EmploeeListItem
                name={item.name}
                image={images[index]?.thumbnailUrl}
                id={index}
                key={index}
              />
          ))}
        </ul>
*/
