import React, { useEffect, useState } from "react";
import { Column, Table } from "react-virtualized";
import { connect } from "react-redux";
import { getVehicles } from "../actions";
import "react-virtualized/styles.css";

const VehiclesTable = ({ vehicles, getVehicles }) => {
  const [entryCount, setEntryCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getVehicles(currentPage, entryCount);
  }, [getVehicles, currentPage, entryCount]);

  const changeEntryCount = () => {
    setEntryCount(entryCount + 5);
  };

  const changeCurrentPage = (value) => {
    setCurrentPage(currentPage + value);
  };

  return (
    <div>
      {vehicles && vehicles.content && vehicles.content.length > 0 ? (
        <div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => changeEntryCount()}
          >
            Show Entries
          </button>
          <Table
            width={800}
            height={400}
            headerHeight={20}
            rowHeight={30}
            rowCount={vehicles.content.length}
            rowGetter={({ index }) => vehicles.content[index]}
          >
            <Column label="VehicleID" dataKey="uuid" width={100} />
            <Column width={100} label="Description" dataKey="qrCode" />
            <Column width={100} label="Status" dataKey="status" />
            <Column
              width={100}
              label="Location"
              dataKey="location"
              cellDataGetter={({ rowData }) =>
                `(${rowData.location.lat} - ${rowData.location.lng})`
              }
            />
            <Column
              width={100}
              label="Battery Level"
              dataKey="batteryLevel"
              cellDataGetter={({ rowData }) =>
                `${Math.round(Number(rowData.batteryLevel) * 100)}%`
              }
            />
            <Column
              width={300}
              label="Operations"
              dataKey="operations"
              cellRenderer={() => <div>Buttons</div>}
            />
          </Table>
          <button
            type="button"
            className="btn btn-secondary"
            disabled={currentPage === 0 ? true : false}
            onClick={() => changeCurrentPage(-1)}
          >
            prev
          </button>
          <p>{vehicles.pageable.pageNumber + 1}</p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => changeCurrentPage(1)}
          >
            next
          </button>
        </div>
      ) : (
        <div>asdad</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  vehicles: state.vehicles.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getVehicles: (currentPage, entryCount) =>
      dispatch(getVehicles(currentPage, entryCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehiclesTable);
