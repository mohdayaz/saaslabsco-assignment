const TableHeaderCmp = ({ data }) => {
  return (
    <thead class="table__header">
      <tr>
        {data.map((e) => (
          <th>{e}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeaderCmp;
