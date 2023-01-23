import React from "react";

import classes from "./SeatGrid.module.css";

const SeatGrid = ({seats}) => {
    return (
        <div className={classes.gridContainer}>
            {
                seats.map((seat, index) => {
                    return <div className={seat.isReserved ? classes.gridItem : classes.gridItemReserved} key={seat.index}>{index}</div>
                })
            }
        </div>
    );
};

export default SeatGrid;