import Axios from "axios";

export const getProgramContent = () => {
  return {
    type: "GET_PROGRAM_CONTENT", // string yang mendiskripsikan perintah
    payload: Axios.get(process.env.REACT_APP_URL_GET_WEBSITE_CONTENT),
  };
};

// export const getIncome = () => {
//   return {
//     type: "GET_INCOME", // string yang mendiskripsikan perintah
//     payload: Axios.get(process.env.REACT_APP_URL_INCOME),
//   };
// };

// export const postNewUser = name => {
//   return {
//     type: "POST_USER",
//     payload: Axios.post(process.env.REACT_APP_URL_STRING, {
//       username: name
//     })
//   };
// };
