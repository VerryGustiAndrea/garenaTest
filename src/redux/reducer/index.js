//Menggabungkan Beberapa reducers menjadi 1 fungsi reducer
//menggunakan combineReducers

import { combineReducers } from "redux";
import websiteContentReducer from "./websiteContent";
import universityReducer from "./university";
import facultyReducer from "./faculty";
import testimonialReducer from "./testimonial";

const reducers = combineReducers({
  university: universityReducer,
  websiteContent: websiteContentReducer,
  faculty: facultyReducer,
  testimonial: testimonialReducer,
});

export default reducers;
