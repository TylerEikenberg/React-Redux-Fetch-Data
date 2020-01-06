const initState = {
  userData: [],
  loading: false,
  error: null
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USER_BEGIN":
      return { ...state, loading: true, error: null };
    case "FETCH_USER_SUCCESS":
      return { ...state, loading: false, userData: action.payload };
    case "FETCH_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        userData: []
      };
    default:
      return state;
  }
};
