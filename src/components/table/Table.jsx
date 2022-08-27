import React from 'react'
import MaterialTable from 'material-table'

const Table = () => {
  const data=[
    {name:'Jasper', age:20},
    {name:'Lawrence', age:12},
    {name:'Niog', age:35},
    {name:'Caballero', age:23},
  ]
  const columns=[
    {
      title:'Name',field:'name'
    },
    {
      title:'Age',field:'age'
    }
  ]
  return (
    <div>
        <MaterialTable title={"inventory"}
        data={data}
        columns={columns}
        />
    </div>
  )
}

export default Table