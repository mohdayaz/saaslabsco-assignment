import "../styles/TableFallBackUi.scss";

const TableFallBackUi = () => {
  return (
    <div class="table__container">
      <table class="table__wrapper">
        <thead class="table__header">
          <tr>
            {[...Array(3).keys()].map((_) => (
              <th class="placeholder" />
            ))}
          </tr>
        </thead>
        <tbody class="table__body_shimmer">
          {[...Array(3).keys()].map((_) => (
            <tr class="table__row">
              <td class="placeholder" />
              <td class="placeholder" />
              <td class="placeholder" />
            </tr>
          ))}
        </tbody>
      </table>
      <div class="table__pagination">
        {[...Array(5).keys()].map((_) => (
          <div class="placeholder" />
        ))}
      </div>
    </div>
  );
};

export default TableFallBackUi;
