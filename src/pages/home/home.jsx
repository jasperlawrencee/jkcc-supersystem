import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.scss"
import Inventory from '../inventory/Inventory'
import POS from '../pos/POS'
import Alerts from '../alerts/Alerts'
import {
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const navigateToInv = () => {
    navigate('/home/admin/inventory')
  }
  const navigateToPos = () => {
    navigate('/home/admin/pos')
  }
  const navigateToAlrt = () => {
    navigate('/home/admin/alerts')
  }
  const navigateToClnt = () => {
    navigate('/home/admin/clients')
  }
  const navigateToEmpl = () => {
    navigate('/home/admin/employees')
  }
  const navigateToSales = () => {
    navigate('/home/admin/sales')
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
          <button onClick={navigateToEmpl}>Employees</button>
          <button onClick={navigateToSales}>Sales</button>
          <button onClick={navigateToClnt}>Clients</button>
          <button onClick={navigateToAlrt}>Send Alerts</button>
          <Routes>
            <Route path='/home/admin/pos' element={<POS/>}/>
            <Route path='/home/admin/inventory' element={<Inventory/>}/>
            <Route path='/home/admin/alert' element={<Alerts/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home