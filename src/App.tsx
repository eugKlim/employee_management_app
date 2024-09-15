import React from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {
  getUserStatusFromLocalStorage,
  setUserStatuses,
} from './Components/Status-Panel/Status-Slice';
import { AppDispatch } from './Components/Store';

// pages
import Home from './Pages/Home/Home';
import ShowMoreInfo from './Pages/Show-more-info/Show-more-info';
import NotFound from './Pages/NotFound/NotFound';
// /

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // get info from localstorage
  useEffect(() => {
    const userStatuses = getUserStatusFromLocalStorage();
    dispatch(setUserStatuses(userStatuses));
  }, [dispatch]);
  // /

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/:id" element={<ShowMoreInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
