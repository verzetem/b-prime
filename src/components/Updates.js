import React from 'react'

const Updates = () => {
	return (
		<div>
			  <button className="btn btn-secondary" id="updates" type="button" data-toggle="collapse" data-target="#updatesCollapse" aria-expanded="false" aria-controls="updatesCollapse">
			    Updates
			  </button>
			<div className="collapse" id="updatesCollapse">




				<div className="card text-white bg-dark mb-3" style={{ height: "11em" }} >
				  <div className="card-body update-card">
				   	<p className="card-text">
				    	Apr 30 - MVP complete.
				    	<hr/>
				    	May 3 - Added local and EVE times, cleaned up CSS.
				    	{/*<div className="arrow bounce">
							  <a className="fas fa-angle-down fa-2x updates-dn-arrow" href="#"></a>
							</div>*/}
				    	<hr/>
				    	May 5 - Cleaned up CSS, ready to deploy.
				    	<hr/>
				    	May 6 - Dev build Deployed 🎉🎉🎉🎉🎉
				   	</p>
				  </div>
				</div>




			</div>
		</div>
		)
}

export default Updates