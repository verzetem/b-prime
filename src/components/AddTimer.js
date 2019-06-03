import React from "react";
import Loader from 'react-loader-spinner'
import ReactTooltip from 'react-tooltip'

const AddTimer = ({
	onSubmit,
	notification,
	resetInput,
	newStructure,
	nameListen,
	timeListen,
	locationListen,
	daysListen,
	hoursListen,
	minutesListen,
	secondsListen,
	loading2,
	typeListen,
	selected
}) => {

	const loaderSpinner = <Loader type="ThreeDots" color="#FFF" height="27.5"	width="27.5" />
	let conditionalSpinner = loading2 ? <button
				type="button"
				className="btn btn-primary"
				onClick={e => onSubmit(e)}
			>
				{loaderSpinner}
			</button> : <button
				type="button"
				className="btn btn-primary"
				onClick={e => onSubmit(e)}
			>
				Submit
			</button>

	return (
		<div className="home add-timer">
			<h1>Add Timer</h1>
			<form>
				<div className="form-group">
					<input
						type="text"
						className="form-control input-one"
						placeholder="Structure Name"
						onChange={e => nameListen(e)}
						value={newStructure.newName}
					/>
					<div className="input-group input-one">
						<div className="input-group-prepend">
							<label className="input-group-text" htmlFor="typeSelect">
								Type
							</label>
						</div>
						<select value={selected} onChange={e => typeListen(e)} className="custom-select" id="typeSelect">
							<option defaultValue>Choose...</option>
							<option>Armor</option>
							<option>Final</option>
						</select>
					</div>
					<input
						type="text"
						className="form-control input-one"
						placeholder="Location"
						onChange={e => locationListen(e)}
						value={newStructure.newLocation}
					/>
				</div>
			</form>
			<form className="form-inline">
				<input
					data-tip="Days"
					type="number"
					className="form-control input-two"
					placeholder="D"
					onChange={e => daysListen(e)}
					value={newStructure.newTime.days}
				/>
				<input
					data-tip="Hours"
					type="number"
					className="form-control input-two"
					placeholder="H"
					onChange={e => hoursListen(e)}
					value={newStructure.newTime.hours}
				/>
				<input
					data-tip="Minutes"
					type="number"
					className="form-control input-two"
					placeholder="M"
					onChange={e => minutesListen(e)}
					value={newStructure.newTime.minutes}
				/>
				<input
					data-tip="Seconds"
					type="number"
					className="form-control input-two"
					placeholder="S"
					onChange={e => secondsListen(e)}
					value={newStructure.newTime.seconds}
				/>
			</form>
			{conditionalSpinner}
			<button
				type="button"
				className="btn btn-warning"
				onClick={e => resetInput(e)}
			>
				Reset
			</button>
			<ReactTooltip type="dark" effect="float"/>
		</div>
	);
};

export default AddTimer;
