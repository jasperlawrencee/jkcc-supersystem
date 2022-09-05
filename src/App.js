import React from "react";
import Home from "./pages/home/Home";
import Employee from "./pages/employeeHome/Employee";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Inventory from "./pages/inventory/Inventory";
import POS from "./pages/pos/POS";
import Alerts from "./pages/alerts/Alerts"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="home">
              <Route path="admin" element={<Home/>}/>
              <Route path=":userID" element={<Employee/>}/>
              </Route>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userID" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productID" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="home/admin/inventory">
              <Route index element={<Inventory/>}>
            </Route>
            </Route>
            <Route path="home/admin/pos">
              <Route index element={<POS/>}/>
            </Route>
            <Route path="home/admin/alerts">
              <Route index element={<Alerts/>}>
            </Route>
            </Route>
          </Route>
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;