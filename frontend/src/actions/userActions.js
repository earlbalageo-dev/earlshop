import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );
    console.log(data);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const register = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/register',
      { firstName, lastName, email, password, confirmPassword },
      config
    );

    // if (data.errors) {
    //   dispatch({ type: USER_LOGIN_FAIL, payload: data.errors });
    // }

    //dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response.data.message.email);
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.message });
  }
};
