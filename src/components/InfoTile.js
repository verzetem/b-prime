import React from "react";
import Updates from "./Updates";

const InfoTile = () => {
	return (
		<div className="col-lg-3 home">
			<div
				className="card info-border"
				style={{
					width: "auto",
					padding: "0",
					marginRight: "auto",
					marginLeft: "auto"
				}}
			>
				<img
					src="https://i.imgur.com/ZtYtSd1.png"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Placeholder</h5>
					<p className="card-text">Placeholder text</p>
					<a href="#]" className="btn btn-primary">
						Placeholder button
					</a>
				</div>
			</div>
			<Updates />
		</div>
	);
};

export default InfoTile;
