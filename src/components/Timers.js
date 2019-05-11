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
	loading
}) => {
	const now = DateTime.local().toFormat("DD TTT");
	const gmt = DateTime.local()
		.setZone("Iceland")
		.toFormat("DD TTT");
	const loaderSpinner = <Loader type="Triangle" color="#FFF" height="200"	width="200" />
	let conditionalSpinner = loading ? loaderSpinner : <h4>No timers available. Please add a timer using the form below.</h4>

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
						<select className="custom-select" id="regionSelect">
							<option defaultValue>!Work in progress!</option>
							<option value="1">Australia</option>
							<option value="2">Europe</option>
							<option value="3">U.S. / Canada</option>
						</select>
					</div>
				</div>
				<br />
				<NewTable structureInfo={structureInfo} onOpenModal={onOpenModal} deleteTimer={deleteTimer} />
				<AddTimer
					onSubmit={onSubmit}
					newStructure={newStructure}
					resetInput={resetInput}
					nameListen={nameListen}
					daysListen={daysListen}
					hoursListen={hoursListen}
					minutesListen={minutesListen}
					secondsListen={secondsListen}
					locationListen={locationListen}
				/>


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
						<select className="custom-select" id="regionSelect">
							<option defaultValue>!Work in progress!</option>
							<option value="1">Australia</option>
							<option value="2">Europe</option>
							<option value="3">U.S. / Canada</option>
						</select>
					</div>
				</div>
				{conditionalSpinner}

				<AddTimer
					onSubmit={onSubmit}
					newStructure={newStructure}
					resetInput={resetInput}
					nameListen={nameListen}
					daysListen={daysListen}
					hoursListen={hoursListen}
					minutesListen={minutesListen}
					secondsListen={secondsListen}
					locationListen={locationListen}
				/>
			</div>
		);
	}
};

export default TimersMain;
