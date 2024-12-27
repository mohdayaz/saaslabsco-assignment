import TABLE_STORE from "../store/tableStore";

const getTablebodyData = (data) =>
  data.map((e) => {
    return {
      serialnumber: e["s.no"],
      percentageFunded: e["percentage.funded"],
      amountPledged: e["amt.pledged"],
    };
  });

const getTableHeaderData = () => {
  return [
    TABLE_STORE.SERIOUL_NO_LABEL,
    TABLE_STORE.PERCENTAGE_FUNDED_LABEL,
    TABLE_STORE.AMOUNT_PLEDGED,
  ];
};

const getVm = (data) => {
  return {
    tableHeaderData: getTableHeaderData(),
    tablBody: getTablebodyData(data),
  };
};

export default getVm;
