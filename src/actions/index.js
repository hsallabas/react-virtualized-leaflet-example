// import vehicles from '../api/vehicles'
import * as types from "../constants/ActionTypes";

const receiveVehicles = (vehicles) => ({
  type: types.GET_ALL_VEHICLES,
  vehicles,
});

export const getVehicles = () => async (dispatch) => {
  fetch("http://console-api.tracmobility.com/test/vehicles?page=0&size=10")
    .then((response) => response.json())
    .then((data) => {
      dispatch(receiveVehicles(data));
    });
};
