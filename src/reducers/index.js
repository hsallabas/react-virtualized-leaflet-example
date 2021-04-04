import { combineReducers } from "redux";
import vehicles from "./vehicles";
import locationMap from "./locationMap";

export default combineReducers({
  vehicles,
  locationMap
});
