import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVehicles } from "../actions";

const Home = ({ vehicles, getVehicles }) => {
  useEffect(() => {
    getVehicles();
  }, [getVehicles]);

  return (
    <div>
      Home Component
      {console.log(vehicles)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  vehicles: state.vehicles.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getVehicles: () => dispatch(getVehicles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
