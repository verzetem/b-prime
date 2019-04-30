import React from 'react'

const AddTimer = ({ onSubmit, notification, resetInput, newStructure, nameListen, timeListen, locationListen, daysListen, hoursListen, minutesListen, secondsListen }) => {
	return (
		<div className="home">
			<h1>Add Timer</h1>


			<form>
			  <div className="form-group">
			    <input type="text" className="form-control input-one" placeholder="Structure Name" onChange={(e) => nameListen(e)} value={newStructure.newName} />
			    <input type="text" className="form-control input-one" placeholder="Location" onChange={(e) => locationListen(e)} value={newStructure.newLocation} />
			  </div>
			</form>
			<form className="form-inline">
				<input type="number" className="form-control input-two" placeholder="Days" onChange={(e) => daysListen(e) } value={newStructure.newTime.days} />
		    <input type="number" className="form-control input-two" placeholder="Hours" onChange={(e) => hoursListen(e) } value={newStructure.newTime.hours} />
		    <input type="number" className="form-control input-two" placeholder="Minutes" onChange={(e) => minutesListen(e) } value={newStructure.newTime.minutes} />
		    <input type="number" className="form-control input-two" placeholder="Seconds" onChange={(e) => secondsListen(e) } value={newStructure.newTime.seconds} />
			</form>
			<button type="button" class="btn btn-primary">Submit</button>
			<button type="button" class="btn btn-warning">Reset</button>
		</div>
		)
}

export default AddTimer