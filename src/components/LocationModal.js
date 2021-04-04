import React from "react";
import { connect } from "react-redux";
import { updateOrderID } from "../actions";

const LocationModal = ({ orderID, closeLocationModal }) => {
    console.log(orderID);
  return (
    <>
      <div className={`modal fade ${orderID ? "show d-block" : ""}`}>
        <div className="modal-dialog modal-dialog-centered b-modal-dialog">
          <div className="modal-content b-modal-location">
            <div className="modal-body">
              <p>{orderID}</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => closeLocationModal()}
          className={`modal-backdrop fade ${orderID ? "show" : ""}`}
        ></div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  orderID: state.locationMap.orderID,
});

const mapDispatchToProps = (dispatch) => {
  return {
    closeLocationModal: () => dispatch(updateOrderID("")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationModal);
