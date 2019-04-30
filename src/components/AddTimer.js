import React from 'react'

const AddTimer = () => {
	return (
		<div className="home">
			<h1>Add Timer</h1>


			<form>
			  <div className="form-group">
			    <input type="text" className="form-control input-one" placeholder="Structure Name" />
			    <input type="text" className="form-control input-one" placeholder="Location" />
			  </div>
			</form>
			<form className="form-inline">
				<input type="text" className="form-control input-two" placeholder="Days" />
		    <input type="text" className="form-control input-two" placeholder="Hours" />
		    <input type="text" className="form-control input-two" placeholder="Minutes" />
		    <input type="text" className="form-control input-two" placeholder="Seconds" />
			</form>

		</div>
		)
}

export default AddTimer