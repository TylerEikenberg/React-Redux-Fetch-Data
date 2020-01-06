const axios = require("axios");

export const fetchUserData = () => {
  return { type: "FETCH_USER_BEGIN" };
};
export const setUserData = userData => {
  return { type: "FETCH_USER_SUCCESS", payload: userData };
};
export const setError = error => {
  return { type: "FETCH_USER_FAILURE", payload: error };
};
// https://api.github.com/users/tylereikenberg

export const fetchUserDataAsync = username => {
  return dispatch => {
    try {
      return axios

        .get(`https://api.github.com/users/${username}`)
        .then(({ data }) => {
          dispatch(setUserData(data));
        });
    } catch (err) {
      if (err) {
        dispatch(setError(err));
      }
    }
  };
};
