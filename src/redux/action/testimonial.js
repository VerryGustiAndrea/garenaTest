import Axios from "axios";

export const getAllTestimonial = () => {
  return {
    type: "GET_ALL_TESTIMONIAL", // string yang mendiskripsikan perintah
    payload: Axios.get(process.env.REACT_APP_URL_GET_ALL_TESTIMONIAL),
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
