import { createContext, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home/Home';
import VolunteerAccount from './component/volunteerAccount/VolunteerAccount';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import EventTask from './component/EventTask/EventTask';
import Admin from './component/Admin/Admin';
import AddEvent from './component/AddEvent/AddEvent';


export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/addEvent' element={<AddEvent />} />
        <Route path='/eventTask' element={<PrivateRoute><EventTask /></PrivateRoute>} />
        <Route path='/volunteeraccount/:id' element={<PrivateRoute><VolunteerAccount /></PrivateRoute>} />

      </Routes>
    </UserContext.Provider>
  );
}

export default App;
