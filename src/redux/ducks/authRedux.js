import Api from "../../api";

const initialState = {
  isLoading: true,
  isLogin: false
};

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FULFILLED = "LOGIN_FULFILLED";
export const LOGIN_REJECTED = "LOGIN_REJECTED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_FULFILLED = "LOGOUT_FULFILLED";
export const LOGOUT_REJECTED = "LOGOUT_REJECTED";

export const doLogin = () => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST
    });

    Api.login()
      .then(res => {
        dispatch({ type: LOGIN_FULFILLED });
      })
      .catch(err => {
        dispatch({ type: LOGIN_REJECTED });
      });
  };
};

export const doLogout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQUEST
    });

    Api.login()
      .then(res => {
        dispatch({ type: LOGOUT_FULFILLED });
      })
      .catch(err => {
        dispatch({ type: LOGOUT_REJECTED });
      });
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case LOGIN_FULFILLED: {
      return {
        ...state,
        isLogin: true,
        isLoading: false
      };
    }

    case LOGIN_REJECTED: {
      return {
        ...state,
        isLogin: false,
        isLoading: false
      };
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case LOGOUT_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        isLogin: false
      };
    }

    case LOGOUT_REJECTED: {
      return {
        ...state,
        isLoading: false
      };
    }

    default: {
      return state;
    }
  }
}
