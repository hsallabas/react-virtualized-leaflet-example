// import vehicles from '../api/vehicles'
import * as types from "../constants/ActionTypes";
import { BASE_URL } from "../constants/Environments";
import { setLocationToVehicleData } from "../helpers/locationHelper";

const receiveVehicles = (vehicles) => ({
  type: types.GET_ALL_VEHICLES,
  vehicles,
});

/**
 * get vehicle data from API and update store.
 * @param {*} pageNumber 
 * @param {*} size 
 * @returns 
 */
export function getVehicles(pageNumber, size) {
  return function (dispatch) {
    fetch(`${BASE_URL}/vehicles?page=${pageNumber}&size=${size}`)
      .then((response) => response.json())
      .then((data) => {
        setLocationToVehicleData(data);
        dispatch(receiveVehicles(data));
      });
  };
}

/**
 * update orderID to open or close location map modal
 * @param {*} orderID 
 * @returns 
 */
export function updateOrderID(orderID) {
  return { type: types.GET_SELECTED_VEHICLE_ORDER_ID, payload: orderID };
}