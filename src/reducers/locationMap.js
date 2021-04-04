import { GET_SELECTED_VEHICLE_ORDER_ID } from "../constants/ActionTypes";

const INITIAL_STATE = {
  orderID: '',
};

/**
 * store selected vehicle location orderID
 * @param {*} state current state
 * @param {*} action new data
 * @returns 
 */
export default function getOrderID(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SELECTED_VEHICLE_ORDER_ID:
      return {
        ...state,
        orderID: action.payload,
      };
    default:
      return state;
  }
}
