import React from "react";

import classes from "./SeatGrid.module.css";

const SeatGrid = ({ room, addToSelectedSeats }) => {
	return (
		<>
			{Array.isArray(room) && (
				<div className={classes.gridContainer}>
					{room.map((seat, index) => {
						console.log(
							"I am the grid, this is the roomdID of the seat: ",
							seat.roomID
						);
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
													seat.seatId,
													seat.roomID,
													seat.seatNumber,
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
