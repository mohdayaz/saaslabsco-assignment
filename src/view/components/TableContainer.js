import "../styles/TableCmp.scss";
import { use, useState } from "react";
import TableCmp from "./TableCmp";
import TableHeaderCmp from "./TableHeaderCmp";
import TableBodyCmp from "./TableBodyCmp";
import TableRowCmp from "./TableRowCmp";
import getVm from "../view-model/lsitVmMapper";
import Pagination from "./Pagination";
import {
  calculateTotalPages,
  getEntriesForPage,
} from "../../utils/commonHelper";

const TableContainer = ({ fetchList }) => {
  const [currentPage, setCurretPage] = useState(1);
  const listData = use(fetchList);
  const { tableHeaderData, tablBody } = getVm(listData);
  const pageLimit = 5;
  const totalEntries = tablBody.length;

  return (
    <div class="table__container">
      <TableCmp>
        <TableHeaderCmp data={tableHeaderData} />
        <TableBodyCmp>
          {getEntriesForPage(tablBody, pageLimit, currentPage).map((row) => (
            <TableRowCmp data={row} />
          ))}
        </TableBodyCmp>
      </TableCmp>
      <Pagination
        currentPage={currentPage}
        totalPages={calculateTotalPages(totalEntries, pageLimit)}
        onPageChange={(value) => setCurretPage(value)}
      />
    </div>
  );
};

export default TableContainer;
