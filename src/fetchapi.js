import axios from "axios";
export const fetchapi = (url, page = 1) => {
  const urlconcat = `${url}api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
  console.log(urlconcat);
  return axios.get(urlconcat).then(({ data }) => {
    return data;
  });
};
