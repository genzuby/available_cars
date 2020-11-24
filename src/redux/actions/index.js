import axios from 'axios';
import {
  GET_MANUFACTURERS,
  GET_COLORS,
  BASE_URL,
  GET_AVAILABLE_CAR_LIST,
  GET_CAR_DETAILINFO,
} from './constant';

export const getManufaturersList = () => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}/manufacturers`);

    dispatch({
      type: GET_MANUFACTURERS,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getColorsList = () => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}/colors`);

    dispatch({
      type: GET_COLORS,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getAvailableCarList = ({ ...params }) => async dispatch => {
  let paramValue = '';

  for (let key in params) {
    paramValue += `${key}=${params[key]}&`;
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/cars?${paramValue.substr(0, paramValue.length - 1)}`
    );

    dispatch({
      type: GET_AVAILABLE_CAR_LIST,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getDetailInfo = stockNumber => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}/cars/${stockNumber}`);

    dispatch({
      type: GET_CAR_DETAILINFO,
      payload: response.data.car,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: GET_CAR_DETAILINFO,
      payload: { stockNumber: 'notfound' },
    });
  }
};
