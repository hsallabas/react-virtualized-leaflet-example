import React, { useEffect, useState } from "react";
import { Column, Table } from "react-virtualized";
import { connect } from "react-redux";
import { getVehicles, updateOrderID } from "../actions";
import "react-virtualized/styles.css";

const VehiclesTable = ({ vehicles, getVehicles, updateOrderID }) => {
  const [entryCount, setEntryCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowData, setRowData] = useState("");
  const [columnDataKey, setColumnDataKey] = useState("");

  useEffect(() => {
    getVehicles(currentPage, entryCount);
  }, [getVehicles, currentPage, entryCount]);

  useEffect(() => {
    if (rowData && columnDataKey === "uuid") {
      console.log(rowData);
      updateOrderID(rowData.location.orderID);
      setRowData("");
    }
  }, [rowData, columnDataKey, updateOrderID]);

  return (
    <div>
      {vehicles && vehicles.content && vehicles.content.length > 0 ? (
        <div>
          <div className="b-table-title">
            <div className="b-table-title__name">Vehicle List</div>
            <div className="b-table-title__menu">i</div>
          </div>
          <div className="b-table-wrapper">
            <div className="b-table-entries">
              {/* <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEntryCount(entryCount + 5)}
            >
              Show Entries
            </button> */}
              <span>Show</span>
              <select
                className="b-table-entries__select"
                id="exampleFormControlSelect1"
              >
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
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
            <div className="b-table-bottom">
              <div className="b-table-bottom__info">
                <span>Showing 1 to 3 of 3 entries</span>
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
    updateOrderID: (orderID) => dispatch(updateOrderID(orderID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehiclesTable);
