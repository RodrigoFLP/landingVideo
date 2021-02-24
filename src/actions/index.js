export const setFavorite = (payload) => ({
  type: "SET_FAVORITE",
  payload,
});

export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});

export const loginRequest = (payload) => {
  return {
    type: "LOGIN_REQUEST",
    payload,
  };
};

export const logoutRequest = () => {
  return {
    type: "LOGOUT_REQUEST",
  };
};

export const signupRequest = (payload) => {
  return {
    type: "SIGNUP_REQUEST",
    payload,
  };
};

export const getVideoSource = (payload) => {
  return {
    type: "GET_VIDEO_SOURCE",
    payload,
  };
};
