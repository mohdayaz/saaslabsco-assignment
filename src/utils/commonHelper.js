export const calculateTotalPages = (totalEntries, entriesPerPage) => {
  if (entriesPerPage === 0) {
    throw new Error("Limit (m) cannot be zero");
  }
  return Math.ceil(totalEntries / entriesPerPage); // Round up to the nearest whole number
};

export const getEntriesForPage = (entries, entriesPerPage, currentPage) => {
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = currentPage * entriesPerPage;
  return entries.slice(startIndex, endIndex);
};
