import React from "react";
import Table from "react-bootstrap/Table";
import TableEmployees from "./TableEmployees";

function Table1({ employees }) {
  // console.log(employees);
  const arr = employees;
  console.log(arr);
  return (
    <div>
      {arr.map((item) => (
        <TableEmployees key={item.name} item={item} />
      ))}
    </div>
  );
}

export default Table1;
