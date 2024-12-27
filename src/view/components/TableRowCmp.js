import React from "react";

const TableRowCmp = ({ data }) => {
  return (
    <tr class="table__row">
      <td>{data.serialnumber}</td>
      <td>{data.percentageFunded}</td>
      <td>{data.amountPledged}</td>
    </tr>
  );
};

export default TableRowCmp;
