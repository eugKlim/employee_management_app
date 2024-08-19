import { createContext, useState } from 'react';

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [userStatuses, setUserStatuses] = useState({});

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

  localStorage.setItem('userStatus', JSON.stringify(userStatuses));

  return (
    <StatusContext.Provider value={{ toggleUserStatus, userStatuses }}>
      {children}
    </StatusContext.Provider>
  );
};
