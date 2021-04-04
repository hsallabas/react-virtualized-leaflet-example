import { GET_SELECTED_VEHICLE_ORDER_ID } from "../constants/ActionTypes";

const INITIAL_STATE = {
  orderID: '',
};

export default function getVehicles(state = INITIAL_STATE, action) {
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
