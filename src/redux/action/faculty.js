import Axios from "axios";

export const getAllFaculty = () => {
  return {
    type: "GET_ALL_FACULTY", // string yang mendiskripsikan perintah
    payload: Axios.get(process.env.REACT_APP_URL_GET_ALL_FACULTY),
  };
};

// export const postNewUser = name => {
//   return {
//     type: "POST_USER",
//     payload: Axios.post(process.env.REACT_APP_URL_STRING, {
//       username: name
//     })
//   };
// };
