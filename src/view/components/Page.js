import React, { Suspense } from "react";
import fetchList from "../../repo/tableRepo";
import TableContainer from "./TableContainer";
import TableFallBackUi from "./TableFallBackUi";

const Page = () => {
  return (
    <Suspense fallback={<TableFallBackUi />}>
      <TableContainer fetchList={fetchList()} />
    </Suspense>
  );
};

export default Page;
