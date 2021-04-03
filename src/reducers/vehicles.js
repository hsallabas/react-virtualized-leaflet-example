import { GET_ALL_VEHICLES } from "../constants/ActionTypes";

const INITIAL_STATE = {
  data: {},
};

export default function getVehicles(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_VEHICLES:
      return {
        ...state,
        data: action.vehicles,
      };
    default:
      return state;
  }
}
