// import vehicles from '../api/vehicles'
import * as types from "../constants/ActionTypes";
import {
  setLocationToVehicleData,
} from "../helpers/locationHelper";

const receiveVehicles = (vehicles) => ({
  type: types.GET_ALL_VEHICLES,
  vehicles,
});

export function getVehicles(pageNumber, size) {
  return function (dispatch) {
    fetch(
      `http://console-api.tracmobility.com/test/vehicles?page=${pageNumber}&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLocationToVehicleData(data);
        dispatch(receiveVehicles(data));
      });
  };
}
