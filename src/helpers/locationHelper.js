import _locations from "../assets/json/location.json";

export function setLocationToVehicleData(vehicleList) {
  const lastLocations = getLastLocations();
  return vehicleList.content.reduce((acc, curr, index) => {
    curr["location"] = lastLocations[index % 10];
    acc.push(curr);
    return acc;
  }, []);
}

export function getLastLocations() {
  return _locations.reduce((acc, curr, index) => {
    if (index > 0 && _locations[index - 1].OrderID < curr.OrderID) {
      acc.push(_locations[index - 1]);
    }
    if (_locations.length - 1 === index) {
      acc.push(_locations[_locations.length - 1]);
    }
    return acc;
  }, []);
}
