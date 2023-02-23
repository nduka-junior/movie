import axios from "axios";
export const fetchapi = (url) => {
  const urlconcat = `${url}api_key=8a2208e5a0ce32e0e5044f64bc78c38d`;
  console.log(urlconcat)
  return axios.get(urlconcat).then(({ data }) => {
   return data
  });
};
