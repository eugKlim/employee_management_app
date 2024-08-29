import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './Employee-list.scss';
import EmploeeListItem from './Emploee-list-item';
import { SearchContext } from '../Search/Search-Context';
import { StatusContext } from '../Status-Panel/StatusContext';

const EmployeeList = ({ setCountUsers }) => {
  const { searchPeople, users, setUsers } = useContext(SearchContext);
  const { filtredUsers, setFilteredUsers } = useContext(StatusContext);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImage] = useState([]);

  useEffect(() => {
    const getUsersFunc = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data);
        const getcountUsers = response.data.length;
        setCountUsers(getcountUsers);

        const userImagesResponse = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        const getImage = userImagesResponse.data.splice(0, getcountUsers);
        setImage(getImage);
      } catch (error) {
        alert('Ошибка получения данных:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getUsersFunc();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchPeople.toLowerCase())
      )
    );
  }, [searchPeople, users]);

  return (
    <div className="employee-list">
      {isLoading ? (
        <img src="Icons/gif/loading.gif" alt="Loading..." className="loading" />
      ) : (
        <ul>
          {filtredUsers.length ? (
            filtredUsers.map((item) => (
              <EmploeeListItem
                name={item.name}
                image={images[item.id - 1]?.thumbnailUrl}
                id={item.id}
                key={item.id}
              />
            ))
          ) : (
            <p className="employee-list__no-search">Ничего не найдено</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
