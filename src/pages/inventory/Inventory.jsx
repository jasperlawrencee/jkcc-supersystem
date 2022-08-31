import React from 'react'
import Reportbar from '../../components/reportbar/Reportbar'
import "./inventory.scss"
// import materialTable from '../../components/table/materialTable'

const Inventory = () => {
  return (
    <div className="inventory">
      <div className="reportbar">
      <Reportbar/>
      </div>
      <div className="listtable">
        <materialTable/>
      </div>
    </div>
  )
}

export default Inventory