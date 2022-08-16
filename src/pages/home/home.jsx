import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import "./home.scss"
//asdasd

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="pos"/>
          <Widget type="inventory"/>
          <Widget type="employees"/>
          <Widget type="sales"/>
          <Widget type="tax"/>
          <Widget type="alert"/>
        </div>
      </div>
    </div>
  )
}

export default Home