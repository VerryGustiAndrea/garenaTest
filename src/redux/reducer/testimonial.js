const initialValue = {
  testimonialData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const testimonialReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_ALL_TESTIMONIAL_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "GET_ALL_TESTIMONIAL_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case "GET_ALL_TESTIMONIAL_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        testimonialData: action.payload.data,
      };

    default:
      return state;
  }
};

export default testimonialReducer;
