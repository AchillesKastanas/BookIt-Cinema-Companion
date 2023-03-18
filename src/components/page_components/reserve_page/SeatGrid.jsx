import React from "react";

import classes from "./SeatGrid.module.css";

const SeatGrid = ({ room, addToSelectedSeats }) => {
	return (
		<>
			{Array.isArray(room) && (
				<div className={classes.gridContainer}>
					{room.map((seat, index) => {
						return (
							<div
								className={
									seat.status === "AVAILABLE"
										? classes.gridItem
										: classes.gridItemReserved
								}
								key={seat.seatId}
								onClick={
									seat.status === "AVAILABLE"
										? () =>
												addToSelectedSeats([
													room.roomID,
													seat.seatId,
												])
										: undefined
								}
							>
								{seat.seatNumber}
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};

export default SeatGrid;
