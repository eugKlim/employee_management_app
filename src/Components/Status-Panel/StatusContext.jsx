import { createContext, useState } from 'react';

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [userStatuses, setUserStatuses] = useState({});

  const userStatusFromLocalStorgae = () => {
    setUserStatuses(JSON.parse(localStorage.getItem('userStatus')));
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
      value={{ toggleUserStatus, userStatuses, userStatusFromLocalStorgae }}
    >
      {children}
    </StatusContext.Provider>
  );
};
