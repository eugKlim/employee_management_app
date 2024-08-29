import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

// get info from localhost
import { useContext, useEffect } from 'react';
import { StatusContext } from './Components/Status-Panel/StatusContext';
// /

// pages
import Home from './Pages/Home/Home';
import ShowMoreInfo from './Pages/Show-more-info/Show-more-info';
import NotFound from './Pages/NotFound/NotFound';
// /

const App = () => {
  // get info from localhost
  const { userStatusFromLocalStorgae } = useContext(StatusContext);
  useEffect(() => {
    userStatusFromLocalStorgae();
  }, []);
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
