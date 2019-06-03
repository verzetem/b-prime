import React from "react"
import { DateTime } from "luxon"
import Loader from 'react-loader-spinner'

import NewTable from "./NewTable"
import AddTimer from "./AddTimer"


const Timers = ({
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
	locationListen,
	loading,
	loading2,
	fetchTimers,
	refreshTimers,
	localConversion,
	countDown,
	spookyWebhook,
	renderer,
	convertToggle,
	timeToggle,
	twentyFourTwelve,
	typeListen,
	selected
}) => {
	const now = (timeToggle === false) ? DateTime.local().toFormat("DD TTT") : DateTime.local().toFormat("DD ttt");
	const gmt = (timeToggle === false) ? DateTime.local().setZone("Iceland").toFormat("DD TTT") : DateTime.local().setZone("Iceland").toFormat("DD ttt")
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
					typeListen={typeListen}
					resetInput={resetInput}
					nameListen={nameListen}
					locationListen={locationListen}
					typeListen={typeListen}
					selected={selected}
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
					{/*<div className="input-group">
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
					</div>*/}
				</div>
				<br />
				<NewTable
					structureInfo={structureInfo} 
					newStructure={newStructure} 
					onOpenModal={onOpenModal} 
					onCloseModal={onCloseModal} 
					modalOpen={modalOpen} 
					deleteTimer={deleteTimer} 
					refreshTimers={refreshTimers} 
					localConversion={localConversion} 
					countDown={countDown} 
					spookyWebhook={spookyWebhook} 
					convertToggle={convertToggle} 
					twentyFourTwelve={twentyFourTwelve}
					resetInput={resetInput}
					nameListen={nameListen}
					daysListen={daysListen}
					hoursListen={hoursListen}
					minutesListen={minutesListen}
					secondsListen={secondsListen}
					locationListen={locationListen}
					loading2={loading2}
					typeListen={typeListen}
					onSubmit={onSubmit}
					selected={selected}
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
				</div>
				{conditionalSpinner}
				{addTimerComponent}
			</div>
		);
	}
};

export default Timers;
