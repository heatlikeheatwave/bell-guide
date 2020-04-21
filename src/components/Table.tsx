import React from 'react';
import TableHead from './TableHead';
import fish from '../data/fish.json';

const Table = () => {
  const copyOfCritterData = [...fish.data];
  
  return(
    <table>
    <caption>Animal Crossing: New Horizon Critter Guide</caption>
      <TableHead/>
      <tbody>
        {
          copyOfCritterData.map((critter, index) => {
            return <tr key={critter.id}>
              <td>{critter.id}</td>
              <td>{critter.name}</td>
              <td>{critter.location}</td>
              <td>{critter.shadowSize}</td>
              <td>{critter.value}</td>
              <td>{critter.spawningHours}</td>
              <td>{null}</td>
            </tr>
          })
        }
      </tbody>
    </table>

  );
}

export default Table;
