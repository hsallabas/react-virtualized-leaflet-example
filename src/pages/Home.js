import React from "react";
import { connect } from "react-redux";
import LocationModal from "../components/LocationModal";
import VehiclesTable from "../components/VehiclesTable";

const Home = ({ orderID }) => {
  return (
    <div className="container-fluid b-content__home">
      <VehiclesTable />
      {orderID && <LocationModal />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  orderID: state.locationMap.orderID,
});

export default connect(mapStateToProps, null)(Home);
