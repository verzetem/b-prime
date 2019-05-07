import React from "react";
import { DateTime } from "luxon";

import AddTimer from "./AddTimer";

const TimersMain = ({
	structureInfo,
	deleteTimer,
	notification,
	modalOpen,
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
	locationListen
}) => {
	const now = DateTime.local().toFormat("DD TTT");
	const gmt = DateTime.local()
		.setZone("Iceland")
		.toFormat("DD TTT");

	let mappedStructureInfo = structureInfo.map((timer, i) => {
		return (
			<React.Fragment key={i}>
				<tbody>
					<tr>
						{/*<th scope="row">{ timer.id }</th>*/}
						<td>{timer.name}</td>
						<td>{timer.location}</td>
						<td>{timer.time}</td>
						<td>
							<span
								className="badge badge-info"
								onClick={e => onOpenModal(e, timer.id)}
							>
								Open
							</span>
						</td>
						<td>
							<span
								className="badge badge-danger"
								onClick={e => deleteTimer(e, timer.id)}
							>
								Delete
							</span>
						</td>
					</tr>
				</tbody>
			</React.Fragment>
		);
	});

	if (structureInfo.length !== 0) {
		return (
			<div className="col-md-7 home">
				<h1>Timers</h1>
				<div
					className="card text-white bg-dark"
					style={{ maxWidth: "18rem" }}
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
				<table
					style={{
						cellspacing: "0",
						cellpadding: "0",
						border: "0",
						width: "100%"
					}}
				>
					<tr>
						<td>
							<table className="table table-hover table-dark">
								<thead>
									<tr>
										{/*<th scope="col">Timer ID</th> need timer ids? */}
										<th scope="col">Structure Name</th>
										<th scope="col">Location</th>
										<th scope="col">Comes Out</th>
										<th scope="col">TZ Card</th>
										<th scope="col"> </th>
									</tr>
								</thead>
							</table>
						</td>
					</tr>
					<tr>
						<td>
							<div
								className="table-scrollable"
							>
								<table className="table table-hover table-dark">
									{mappedStructureInfo}
								</table>
							</div>
						</td>
					</tr>
				</table>

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
					style={{ maxWidth: "18rem" }}
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
				<h4>No timers available. Please add a timer using the form below.</h4>
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
