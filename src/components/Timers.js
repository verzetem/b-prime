import React from 'react'

import AddTimer from './AddTimer'

const Timers = ({ structureInfo, deleteTimer, notification, modalOpen, onOpenModal, onCloseModal, newStructure, onSubmit, resetInput, nameListen, daysListen, hoursListen, minutesListen, secondsListen, locationListen }) => {

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
			<div className="col-sm-10 home">
			<h1>Timers</h1>
			
			<table className="table table-hover table-dark">
			  <thead>
			    <tr>
			      {/*<th scope="col">Timer ID</th>*/}
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
			<div className="col-sm-10 home">
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