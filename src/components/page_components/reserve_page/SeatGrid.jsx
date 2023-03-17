import React from "react";

import classes from "./SeatGrid.module.css";

const SeatGrid = ({ room, addToSelectedSeats }) => {
	return (
		<div className={classes.gridContainer}>
			{room.seats &&
				room.seats.map((seat, index) => {
					return (
						<div
							className={
								seat.isReserved
									? classes.gridItem
									: classes.gridItemReserved
							}
							key={seat.index}
							onClick={
								seat.isReserved
									? () =>
											addToSelectedSeats([
												room.roomId,
												index,
											])
									: undefined
							}
						>
							{index}
						</div>
					);
				})}
		</div>
	);
};

export default SeatGrid;
