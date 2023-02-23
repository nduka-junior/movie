import axios from "axios";
export const fetchapi = (url,page=1) => {
  const urlconcat = `${url}api_key=8a2208e5a0ce32e0e5044f64bc78c38d&page=${page}`;
  console.log(urlconcat)
  return axios.get(urlconcat).then(({ data }) => {
   return data
  });
};
