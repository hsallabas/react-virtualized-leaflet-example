import { BASE_URL } from "../constants/Environments";

export function getVehicles() {
  return fetch(BASE_URL + "/vehicles?page=0&size=10")
    .then((response) => response.json())
    .then((data) => data);
}
