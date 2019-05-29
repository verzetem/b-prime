import React from "react";
import Updates from "./Updates";
import ReactTooltip from 'react-tooltip'


const InfoTile = () => {

	const thing = "Rocar Evaal"
	const thing2 = "54.30m"
	
	if (2 === 1) {
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
					{/*<img
						src="https://i.imgur.com/ZtYtSd1.png"
						className="card-img-top"
						alt="..."
					/>*/}
					<div className="card-body">
						<h5 className="card-title">Last 5 kills</h5>
						<button className="btn btn-dark" data-tip="Refresh table" type="button" style={{ margin: "0 !important" }}><i className="fas fa-sync-alt"></i></button>
						<hr/>
						<div className="zkb-wrapper">
							Something went wrong...
						</div>
					</div>
				</div>
				<Updates />
			</div>
			)
	} else {
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
					{/*<img
						src="https://i.imgur.com/ZtYtSd1.png"
						className="card-img-top"
						alt="..."
					/>*/}
					<div className="card-body">
						<h5 className="card-title">Last 5 kills / losses <button className="btn btn-dark" data-tip="Refresh recent kills" type="button" style={{ fontSize: "0.5em", margin: "0 !important" }}><i className="fas fa-sync-alt zkb-refresh"></i></button></h5>
						<hr/>
						<div className="zkb-wrapper">
							<img data-tip={thing + " : " + thing2} className="zkb-pic" src="https://imageserver.eveonline.com/Type/634_64.png" alt=""/>
							<img className="zkb-pic" src="https://imageserver.eveonline.com/Type/634_64.png" alt=""/>
							<img className="zkb-pic" src="https://imageserver.eveonline.com/Type/634_64.png" alt=""/>
							<img className="zkb-pic" src="https://imageserver.eveonline.com/Type/634_64.png" alt=""/>
							<img className="zkb-pic" src="https://imageserver.eveonline.com/Type/634_64.png" alt=""/>
							<ReactTooltip type="info" effect="solid"/>
						</div>
					</div>
				</div>
				<Updates />
			</div>
			)
	}
};

export default InfoTile;
