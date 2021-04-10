# React-Virtualized-Leaflet Location History App

### [DEMO](https://trac-mobility-hga9w8mmn-hsallabas.vercel.app/)
React-Virtualized-Leaflet Location History App gives the users ability to track their mobile vehicles' location history.

## Features

- Ability to show the list of vehicle' information
- Dashboard based UI
- Ability to change vehicle information table entries count. 
- Paging of vehicle information table
- Ability to show table page size
- Multiple featured side menu

---
## Tech

React-Virtualized-Leaflet Location History App is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses open source projects listed below to work properly:

- [Leaflet](https://leafletjs.com) - Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 39 KB of JS, it has all the mapping features most developers ever need.
- [redux](https://redux.js.org/) - Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.
- [react-virtualized](https://bvaughn.github.io/react-virtualized) - React components for efficiently rendering large lists and tabular data.
- [Bootstrap SCSS](https://www.npmjs.com/package/bootstrap-scss) - Sleek, intuitive, and powerful front-end framework for faster and easier web development.

---
## Installation & Available Scripts

React-Virtualized-Leaflet Location History App requires [Node.js](https://nodejs.org/) v10+ to run.

Cloning project and installing dependencies

```sh
git clone https://github.com/Tracmobility/senior-frontend-assessment
cd trac-mobility
yarn install
```

In the project directory, you can run:

##### `yarn start`
Runs the app in the development mode. The page will reload if you make edits.
You will also see any lint errors in the console.

##### `yarn test`
Launches the test runner in the interactive watch mode. 

##### `yarn build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

## App Flow & Code Examples

Project Structure
```
project
|-- public
|-- src
|    |-- actions
|    |-- assests
|    |      |-- images
|    |      |-- json
|    |      `-- css
|    |-- components
|    |-- constants
|    |-- helpers
|    |-- pages
|    |-- reducers
|    |-- routes
|    `-- index.js
|-- package.json
`-- README.md
```

App uses the Fetch API provides to get data from [TracMobility test API](http://console-api.tracmobility.com/test/vehicles?page=0&size=10). Then it passes the returned data to the app context for showing to users

App is initializes with an itial state created and distributed by the redux

```sh
const INITIAL_STATE = {
  data: {},
};

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
```

`getVehicles` is an action function that is used to call the data, and it needs pageNumber, size parameters to run.

```sh
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
```

`setLocationToVehicleData` is a helper function that is used to add a location field to the vehicle data, and it needs 'a list of vehicles' to run.

```sh
export function setLocationToVehicleData(vehicleList) {
  const lastLocations = getLastLocations();
  return vehicleList.content.reduce((acc, curr, index) => {
    curr["location"] = lastLocations[index % 10];
    acc.push(curr);
    return acc;
  }, []);
}
```

## ToDo's

- waiting feedback
