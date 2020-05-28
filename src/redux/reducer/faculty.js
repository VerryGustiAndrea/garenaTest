const initialValue = {
  facultyData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const facultyReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_ALL_FACULTY_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "GET_ALL_FACULTY_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case "GET_ALL_FACULTY_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        facultyData: action.payload.data,
      };

    default:
      return state;
  }
};

export default facultyReducer;
