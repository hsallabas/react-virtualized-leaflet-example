import _locations from "../assets/json/location.json";

/**
 * set location field to vehicleList 
 * @param {*} vehicleList 
 * @returns 
 */
export function setLocationToVehicleData(vehicleList) {
  const lastLocations = getLastLocations();
  return vehicleList.content.reduce((acc, curr, index) => {
    curr["location"] = lastLocations[index % 10];
    acc.push(curr);
    return acc;
  }, []);
}

/**
 * get the last locations that belong to every order list
 * @returns 
 */
export function getLastLocations() {
  return _locations.reduce((acc, curr, index) => {
    if (index > 0 && _locations[index - 1].orderID < curr.orderID) {
      acc.push(_locations[index - 1]);
    }
    if (_locations.length - 1 === index) {
      acc.push(_locations[_locations.length - 1]);
    }
    return acc;
  }, []);
}

/**
 * get last location by orderID from locations Json
 * @param {*} orderID 
 * @returns 
 */
export function getLastHistory(orderID) {
  return _locations.reduce((acc, curr) => {
    if (orderID === curr.orderID) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
