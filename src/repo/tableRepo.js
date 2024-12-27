import API_URLS from "./store/repoStore.js";

const fetchList = async () => {
  try {
    const response = await fetch(API_URLS.GET_LIST);
    return response.json();
  } catch (error) {
    console.log("Something went wrong!");
  }
};

export default fetchList;
