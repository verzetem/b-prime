import React from "react"
import { DateTime } from "luxon"
import Loader from 'react-loader-spinner'

import NewTable from "./NewTable"
import AddTimer from "./AddTimer"


const TimersMain = ({
	structureInfo,
	deleteTimer,
	notification,
	onOpenModal,
	onCloseModal,
	newStructure,
	onSubmit,
	resetInput,
	nameListen,
	daysListen,
	hoursListen,
	minutesListen,
	secondsListen,
	locationListen,
	loading,
	loading2,
	onRegionChange,
	fetchTimers,
	refreshTimers,
	localConversion,
	countDown,
	spookyWebhook
}) => {
	const now = DateTime.local().toFormat("DD TTT");
	const gmt = DateTime.local()
		.setZone("Iceland")
		.toFormat("DD TTT");
	const loaderSpinner = <Loader type="Triangle" color="#FFF" height="200"	width="200" />
	const conditionalSpinner = loading ? loaderSpinner : <h4>No timers available. Please add a timer using the form below.</h4>

	const addTimerComponent = <AddTimer 
					onSubmit={onSubmit}
					newStructure={newStructure}
					resetInput={resetInput}
					nameListen={nameListen}
					daysListen={daysListen}
					hoursListen={hoursListen}
					minutesListen={minutesListen}
					secondsListen={secondsListen}
					locationListen={locationListen}
					loading2={loading2}
				/>


	if (structureInfo.length !== 0) {
		return (
			<div className="col-md-7 home">
				<h1>Timers</h1>
				<div
					className="card text-white bg-dark"
					style={{ width: "20rem" }}
				>
					<p className="card-text">
						Local: {now} <br /> EVE: {gmt}
					</p>
					<div className="input-group">
						<div className="input-group-prepend">
							<label className="input-group-text" htmlFor="regionSelect">
								Region
							</label>
						</div>

						<select onChange={onRegionChange} className="custom-select" id="regionSelect">
							<option defaultValue>Choose...</option>
							<option value="au">Australia</option>
							<option value="eu">Europe</option>
							<option value="na">North America</option>
						</select>
					</div>
				</div>
				<br />
				<NewTable structureInfo={structureInfo} onOpenModal={onOpenModal} deleteTimer={deleteTimer} refreshTimers={refreshTimers} localConversion={localConversion} countDown={countDown} />
				{addTimerComponent}
			</div>
		);
	} else {
		return (
			<div className="col-md-7 home">
				<h1>Timers</h1>
				<div
					className="card text-white bg-dark mb-5"
					style={{ maxWidth: "20rem" }}
				>
					<p className="card-text">
						Local: {now} <br /> EVE: {gmt}
					</p>
					<div className="input-group">
						<div className="input-group-prepend">
							<label className="input-group-text" htmlFor="regionSelect">
								Region
							</label>
						</div>
						<select onChange={e => onRegionChange(e)} className="custom-select" id="regionSelect">
							<option defaultValue>Choose...</option>
							<option value="au">Australia</option>
							<option value="eu">Europe</option>
							<option value="na">North America</option>
						</select>
					</div>
				</div>
				{conditionalSpinner}
				{addTimerComponent}
			</div>
		);
	}
};

export default TimersMain;
