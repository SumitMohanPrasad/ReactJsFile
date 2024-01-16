import React from "react";
import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import styles from "./List.module.css";

const List = ({ rows, timestamps, selectedCurrency, onRowClick }) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {selectedCurrency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row,index) => {
          const timestampData = timestamps.results.find((order) => order["&id"] === row["&id"]);

          return (
            <ListRow
            key={index}
            onClick={(event) => {
              console.log("row clicked", row);
              console.log("timestampData", timestampData);
              onRowClick(row, timestampData);
            }}

            >
              <ListRowCell>{row["&id"]}</ListRowCell>
              <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
              <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
              <ListRowCell>
                {timestampData ? timestampData.timestamps.orderSubmitted : "N/A"}
              </ListRowCell>
              <ListRowCell>{row.bestExecutionData.orderVolume[selectedCurrency]}</ListRowCell>
            </ListRow>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
