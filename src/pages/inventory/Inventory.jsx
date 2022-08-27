import React from 'react'
import Reportbar from '../../components/reportbar/Reportbar'
import "./inventory.scss"
import Table from '../../components/table/Table'

const Inventory = () => {
  return (
    <div className="inventory">
      <div className="reportbar">
      <Reportbar/>
      </div>
      <div className="listtable">
        <Table />
      </div>
    </div>
  )
}

export default Inventory