import React from 'react'

import AddTimer from './AddTimer'

const Timers = () => {
	return (
		<div className="col-sm-10 home">
			<h1>Timers</h1>
			
			<table className="table table-hover table-dark">
			  <thead>
			    <tr>
			      <th scope="col">Timer ID</th>
			      <th scope="col">Structure Name</th>
			      <th scope="col">Location</th>
			      <th scope="col">Comes Out</th>
			      <th scope="col">TZ Card</th>
			      <th scope="col">Delete</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <th scope="row">1</th>
			      <td>Mark</td>
			      <td>Otto</td>
			      <td>@mdo</td>
			    </tr>
			  </tbody>
			</table>
			<AddTimer />
		</div>
		)
}

export default Timers