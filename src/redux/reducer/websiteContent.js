const initialValue = {
  programContent: [],
  incomeData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const websiteContentReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_PROGRAM_CONTENT_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "GET_PROGRAM_CONTENT_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case "GET_PROGRAM_CONTENT_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        programContent: action.payload.data,
      };

    // case "GET_INCOME_PENDING":
    //   return {
    //     ...state,
    //     isPending: true,
    //     isRejected: false,
    //     isFulfilled: false,
    //   };
    // case "GET_INCOME_REJECTED":
    //   return {
    //     ...state,
    //     isPending: false,
    //     isRejected: true,
    //     errMsg: action.payload.data,
    //   };
    // case "GET_INCOME_FULFILLED":
    //   return {
    //     ...state,
    //     isPending: false,
    //     isFulfilled: true,
    //     incomeData: action.payload.data,
    //   };
    default:
      return state;
  }
};

export default websiteContentReducer;
