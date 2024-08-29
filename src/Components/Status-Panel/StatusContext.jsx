import { createContext, useState } from 'react';

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [userStatuses, setUserStatuses] = useState({});
  const [filtredUsers, setFilteredUsers] = useState([]);

  const userStatusFromLocalStorgae = () => {
    let getStatusIcons = JSON.parse(localStorage.getItem('userStatus'));
    if (
      getStatusIcons !== null &&
      getStatusIcons !== undefined &&
      Object.keys(getStatusIcons).length !== 0
    ) {
      setUserStatuses(JSON.parse(localStorage.getItem('userStatus')));
    }
  };

  const toggleUserStatus = (userId, icon) => {
    setUserStatuses((prevStatuses) => {
      const userIcons = prevStatuses[userId] || [];
      const newIcons = userIcons.includes(icon)
        ? userIcons.filter((i) => i !== icon)
        : [...userIcons, icon];

      return {
        ...prevStatuses,
        [userId]: newIcons,
      };
    });
  };

  return (
    <StatusContext.Provider
      value={{
        toggleUserStatus,
        userStatuses,
        userStatusFromLocalStorgae,
        filtredUsers,
        setFilteredUsers,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};
