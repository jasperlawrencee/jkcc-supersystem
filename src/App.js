import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";

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
            <Route path="home" element={<Home/>}/>
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
          </Route>
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;