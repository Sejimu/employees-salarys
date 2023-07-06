import React, { useState } from "react";
import Table from "react-bootstrap/Table";

function TableEmployees({ item }) {
  const [inputVal, setInputVal] = useState(item.days);
  const [inputVal2, setInputVal2] = useState(item.salaryPerDay);

  function salary() {
    return inputVal * inputVal2;
  }
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>days</th>
          <th>salaryPerDay</th>
          <th>salary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{item.name}</td>
          <td>{item.surname}</td>
          <td>
            <input
              type="number"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
            />
          </td>
          <td>
            <input
              type="number"
              value={inputVal2}
              onChange={(e) => {
                setInputVal2(e.target.value);
              }}
            />
          </td>

          <td>{salary()}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableEmployees;
