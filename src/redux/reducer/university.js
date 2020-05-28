const initialValue = {
  universityData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const universityReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_ALL_UNIVERSITY_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "GET_ALL_UNIVERSITY_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case "GET_ALL_UNIVERSITY_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        universityData: action.payload.data,
      };

    default:
      return state;
  }
};

export default universityReducer;
