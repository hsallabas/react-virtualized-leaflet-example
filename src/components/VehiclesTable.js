import React, { useEffect, useState } from "react";
import { Column, Table } from "react-virtualized";
import { connect } from "react-redux";
import { getVehicles, updateOrderID } from "../actions";
import "react-virtualized/styles.css";
import MenuIcon from "../assets/images/menu.svg";

const ENTRIES = [
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 20,
    label: "20",
  },
];

const VehiclesTable = ({ vehicles, getVehicles, updateOrderID }) => {
  const [entries] = useState(ENTRIES);
  const [entryCount, setEntryCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowData, setRowData] = useState("");
  const [columnDataKey, setColumnDataKey] = useState("");

  useEffect(() => {
    getVehicles(currentPage, entryCount);
  }, [getVehicles, currentPage, entryCount]);

  useEffect(() => {
    if (rowData && columnDataKey === "uuid") {
      updateOrderID(rowData.location.orderID);
      setRowData("");
    }
  }, [rowData, columnDataKey, updateOrderID]);

  return (
    <div>
      {vehicles && vehicles.content && vehicles.content.length > 0 ? (
        <div className="b-table-wrapper">
          <div className="b-table-title">
            <div className="b-table-title__name">Vehicle List</div>
            <div className="b-table-title__menu"><img src={MenuIcon} alt="icon" /></div>
          </div>
          <div className="b-table-content-wrapper">
            <div className="b-table-entries">
              <span>Show</span>
              <select
                className="b-table-entries__select"
                id="exampleFormControlSelect1"
                onChange={(event) => setEntryCount(event.target.value)}
                value={entryCount}
              >
                {entries &&
                  entries.length &&
                  entries.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  ))}
              </select>
              <span>entries</span>
            </div>
            <Table
              width={800}
              height={400}
              autoHeight={true}
              headerHeight={20}
              rowHeight={30}
              rowCount={vehicles.content.length}
              rowGetter={({ index }) => vehicles.content[index]}
              onColumnClick={(columnData) =>
                setColumnDataKey(columnData.dataKey)
              }
              onRowClick={(data) => setRowData(data.rowData)}
            >
              <Column label="VehicleID" dataKey="uuid" width={100} />
              <Column width={100} label="QR Code" dataKey="qrCode" />
              <Column width={100} label="Status" dataKey="status" />
              <Column
                width={100}
                label="Location"
                dataKey="location"
                cellDataGetter={({ rowData }) =>
                  `(${rowData.location.lat}, ${rowData.location.lng})`
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
            <div className="b-table-bottom">
              <div className="b-table-bottom__info">
                <span>Showing 1 to {entryCount} of {entryCount} entries</span>
              </div>
              <div className="b-table-bottom__paginator">
                <button
                  type="button"
                  className="btn b-table-bottom__paginator__button-prev"
                  disabled={currentPage === 0 ? true : false}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </button>
                <span className="b-table-bottom__paginator__page-number">
                  {vehicles.pageable.pageNumber + 1}
                </span>
                <button
                  type="button"
                  className="btn b-table-bottom__paginator__button-next"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
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
    updateOrderID: (orderID) => dispatch(updateOrderID(orderID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehiclesTable);
