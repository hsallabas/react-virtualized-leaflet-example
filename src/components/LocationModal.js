import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateOrderID } from "../actions";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "../assets/images/marker-icon.png";
import iconShadow from "../assets/images/marker-shadow.png";
import iconRetinaUrl from "../assets/images/marker-icon-2x.png";
import { getLastHistory } from "../helpers/locationHelper";

let DefaultIcon = L.icon({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationModal = ({ orderID, closeLocationModal }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(getLastHistory(orderID));
  }, [setLocations, orderID]);

  return (
    <>
      <div className={`modal fade ${orderID ? "show d-block" : ""}`}>
        <div className="modal-dialog modal-dialog-centered b-modal-dialog">
          <div className="modal-content b-modal-location">
            <div className="modal-body">
              <div className="b-modal-location__header">
                <div className="b-modal-location__header-info">
                  <span className="b-modal-location__header-info__title">
                    Order ID:{" "}
                  </span>
                  {orderID}
                </div>
                <div
                  className="b-modal-location__header-info__close"
                  onClick={() => closeLocationModal()}
                >
                  Close
                </div>
              </div>
              <div className="b-modal-location__map">
                <MapContainer center={[51.5176398, -0.1204129]} zoom={14}>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {locations &&
                    locations.length &&
                    locations.map((location, index) => (
                      <Marker
                        key={index}
                        position={[location.lat, location.lng]}
                      >
                        <Popup>{location.Timestamp}</Popup>
                      </Marker>
                    ))}
                </MapContainer>
              </div>
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
