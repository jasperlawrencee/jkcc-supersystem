import React from "react";
import Home from "./pages/home/Home";
import Employee from "./pages/employeeHome/Employee";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Inventory from "./pages/inventory/Inventory";

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import POS from "./pages/pos/POS";


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
            <Route path="inventory">
              <Route index element={<Inventory/>}>
              </Route>
            <Route path="pos">
              <Route index element={<POS/>}/>
            </Route>
            </Route>
          </Route>
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;