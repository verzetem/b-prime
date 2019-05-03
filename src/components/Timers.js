import React from 'react'
import { DateTime } from 'luxon'

import AddTimer from './AddTimer'

const Timers = ({ structureInfo, deleteTimer, notification, modalOpen, onOpenModal, onCloseModal, newStructure, onSubmit, resetInput, nameListen, daysListen, hoursListen, minutesListen, secondsListen, locationListen }) => {

const now = DateTime.local().toFormat('DD TTT')
const gmt = DateTime.local().setZone("Iceland").toFormat('DD TTT')

let mappedStructureInfo = structureInfo.map((timer, i) => {
	return (
		<React.Fragment key={i}>
			<tbody>
		    <tr>
		      {/*<th scope="row">{ timer.id }</th>*/}
		      <td>{ timer.name }</td>
		      <td>{ timer.location }</td>
		      <td>{ timer.time }</td>
		      <td><span class="badge badge-info" onClick={ (e) => onOpenModal(e, timer.id) }>Open</span></td>
		      <td><span class="badge badge-danger" onClick={ (e) => deleteTimer(e, timer.id) }>Delete</span></td>
		    </tr>
		  </tbody>
		</React.Fragment>
		)
})

	if (structureInfo.length !== 0) {
		return (

			<div className="col-lg-5 home">
				<h1>Timers</h1>
				<div class="card text-white bg-dark mb-3" style={{ maxWidth: "18rem", maxHeight: "5rem" }}>
				   <p class="card-text">Local: { now } <br/> EVE: { gmt }</p>
						<div class="input-group">
						  <div class="input-group-prepend">
						    <label class="input-group-text" for="regionSelect">Region</label>
						  </div>
						  <select class="custom-select" id="regionSelect">
						    <option selected>Choose...</option>
						    <option value="1">U.S. / Canada</option>
						    <option value="2">Europe</option>
						    <option value="3">Australia</option>
						  </select>
						</div>
				</div>
				<br />
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
				  { mappedStructureInfo }
				</table>
				<AddTimer
					onSubmit={ onSubmit } 
					newStructure={ newStructure } 
					resetInput={ resetInput } 
					nameListen={ nameListen } 
					daysListen={ daysListen } 
					hoursListen={ hoursListen } 
					minutesListen={ minutesListen } 
					secondsListen={ secondsListen } 
					locationListen={ locationListen }
				/>
		</div>
			)
	} else {
		return (
			<div className="col-lg-5 home">
				<h1>Timers</h1>
				<h4>No timers available. Please add a timer using the form below.</h4>
				<AddTimer
					onSubmit={ onSubmit } 
					newStructure={ newStructure } 
					resetInput={ resetInput } 
					nameListen={ nameListen } 
					daysListen={ daysListen } 
					hoursListen={ hoursListen } 
					minutesListen={ minutesListen } 
					secondsListen={ secondsListen } 
					locationListen={ locationListen }
				/>
			</div>
			)
	}
}

export default Timers