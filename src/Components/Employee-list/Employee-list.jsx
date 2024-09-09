import { useEffect, useState } from 'react';
import './Employee-list.scss';
import EmploeeListItem from './Employee-list-item';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAndImages } from './Employee-Slice';

const EmployeeList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const { status, filtredUsers } = useSelector((state) => state.employee);

  useEffect(() => {
    if (status === 'idle') dispatch(getUsersAndImages());
    if (status === 'success') setIsLoading(false);
  }, [status, dispatch]);

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
                image={item.image}
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
