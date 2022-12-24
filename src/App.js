import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard';
import Account from './component/NestedComponent/Account';
import Profile from './component/NestedComponent/Profile';
import NestedExample from './component/NestedExample';
import Sidebar from './component/Sidebar';

import AllUsers from './CrudComponent/AllUsers';
import AddUser from './CrudComponent/AddUser';

export const dataContext = React.createContext();

function App() {
  let data = {
    monthlyearing: "40,000",
    yearlyearning: "215,000",
    task: 70,
    pending: 18
  }
  return <div id="wrapper">
    <BrowserRouter>
    <Sidebar />
    <dataContext.Provider value={data}>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/nested-example' element={<NestedExample />}> 
          <Route path='profile' element={<Profile />} />
          <Route path='account' element={<Account />} />
        </Route>
        <Route path='/all-users' element={<AllUsers />} />
        <Route path='/add-users' element={<AddUser />} />
        <Route path='/add-users/:id' element={<AddUser />} />

        <Route path='*' element={<Navigate to={'/dashboard'} />} />
      </Routes>
    </dataContext.Provider>
    </BrowserRouter>
  </div>
}

export default App;
