import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.scss"
import Inventory from '../inventory/Inventory'
import POS from '../pos/POS'
import {
  Route,
  Routes,
  // Route,
  // Routes,
  useNavigate
} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const navigateToInv = () => {
    navigate('/inventory')
  }
  const navigateToPos = () => {
    navigate('/pos')
  }
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* <Widget type="pos"/> */}
          {/* <Widget type="inventory"/> */}
          {/* <Widget type="employees"/>
          <Widget type="sales"/>
          <Widget type="tax"/> */}
          {/* <Widget type="alert"/> */}
          <button onClick={navigateToPos}>POS</button>
          <button onClick={navigateToInv}>Inventory</button>
          <button>Employees</button>
          <button>Sales</button>
          <button>Tax</button>
          <button>Send Alerts</button>
          <Routes>
            <Route path='/inventory' element={<Inventory/>}/>
            <Route path='/pos' element={<POS/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home