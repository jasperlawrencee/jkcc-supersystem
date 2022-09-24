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
<<<<<<< HEAD
import EM from './pages/EM/Em';
import Sales from './pages/sales/Sales';
import Alerts from './pages/alerts/Alerts';

=======
import Alerts from "./pages/alerts/Alerts"
>>>>>>> 2b584416ae7ce17fe644f63d7b3b3fabd8fd5534

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductPage from "./pages/productPage/ProductPage";

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
<<<<<<< HEAD
            </Route>
            <Route path="inventory">
              <Route index element={<Inventory/>}>
=======
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
>>>>>>> 2b584416ae7ce17fe644f63d7b3b3fabd8fd5534
            </Route>
          </Route>
            <Route path="pos">
              <Route index element={<POS/>}/> 
            </Route>
            <Route path="ref">
              <Route index element={<ProductPage/>}/>
            </Route>
            <Route path="EM">
                <Route index element={<EM/>}/>
            </Route>
            <Route path="sales">
                <Route index element={<Sales/>}/>
            </Route>
            <Route path="alerts">
                <Route index element={<Alerts />}/>
            </Route>
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;