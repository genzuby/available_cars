import axios from 'axios';
import { GET_MANUFACTURERS, GET_COLORS, BASE_URL } from './constant';

export const getManufaturersList = () => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}manufacturers`);

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
    const response = await axios.get(`${BASE_URL}colors`);

    dispatch({
      type: GET_COLORS,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};
