import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableHead from './TableHead';

const Table = () => {
  const [columnNames, setColumnNames] = useState('');

  useEffect(() => {
    getData();

  }, [])

  const getData = () => {
    axios(`http://acnhapi.com/v1/fish/1`).then(response => console.log(response.data));
  }

  // const getColumnNames = () => {
  //   // save the first critter to a variable
  //   const firstCritterDatum = copyOfCritterData[0];
  //   const critterKeys = Object.keys(firstCritterDatum);
  //   console.log(critterKeys);

  //   // return the property names of the first critter, which will populate the column names in the TableHead component
  //   setColumnNames(critterKeys);
  // }
  
  
  return(
    <table>
    <caption>Animal Crossing: New Horizon Critter Guide</caption>
      {/* <TableHead columns={columnNames}/> */}
      <tbody>
        {
          // copyOfCritterData.map((critter, index) => {
          //   return <tr key={critter.id}>
          //     <td>{critter.id}</td>
          //     <td>{critter.name}</td>
          //     <td>{critter.location}</td>
          //     <td>{critter.shadowSize}</td>
          //     <td>{critter.value}</td>
          //     <td>{critter.spawningHours}</td>
          //     <td>{null}</td>
          //   </tr>
          // })
        }
      </tbody>
    </table>

  );
}

export default Table;
