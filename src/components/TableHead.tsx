import React from 'react';

const TableHead = (props) => {
  return(
    <thead>
      <tr>
        <th>
          {
          props.map(prop => {
            return <button
            type="button"
            // onClick={() => requestSort('id')}
            // className={getClassNamesFor('id')}
            >
              {}
            </button>
          })
          }
        </th>
    </tr>
  </thead>
  );
}

export default TableHead;
