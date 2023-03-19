import React from "react";

import classes from "./ModalWindow.module.css";
import ColoredContainer from "../../general/ColoredContainer";

function ModalWindow({ date, onClose }) {
	return (
		<div className={classes.modal}>
			<div className={classes.modalContent}>
				<div className={classes.modalHeader}>
					<h2>&nbsp;&nbsp;&nbsp;&nbsp;Order Confirmed</h2>
				</div>
				<button className={classes.closeButton} onClick={onClose}>
					X
				</button>
				<br></br>
				<div className={classes.homeContainer}>
					<p className={classes.titleBig}>Thank you for your order</p>
					<br></br>
					<img
						src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png"
						alt="Check mark"
						width="80"
						height="80"
					/>
					<br></br>
					<br></br>
					<p className={classes.titleMid}>
						Date: {date.toLocaleDateString()}
					</p>
					<p className={classes.titleSmall}>
						Order ID: #{" "}
						{Math.floor(100000 + Math.random() * 900000)}
					</p>
					<br></br>
					<ColoredContainer
						key={1}
						className="colored_container__blue__movie_details"
					>
						<p className={classes.titleMid}>
							You will receive a confirmation email shortly with
							your order details.
						</p>
						<img
							src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
							alt="Check mark"
							width="80"
							height="80"
						/>
					</ColoredContainer>
				</div>
			</div>
		</div>
	);
}

export default ModalWindow;
