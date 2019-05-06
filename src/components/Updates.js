import React from 'react'

const Updates = () => {
	return (
		<div>
			  <button class="btn btn-secondary" id="updates" type="button" data-toggle="collapse" data-target="#updatesCollapse" aria-expanded="false" aria-controls="updatesCollapse">
			    Updates
			  </button>
			<div class="collapse" id="updatesCollapse">




				<div class="card text-white bg-dark mb-3" style={{ height: "11em" }} >
				  <div class="card-body update-card">
				   	<p class="card-text">
				    	Apr 30 - MVP complete.
				    	<hr/>
				    	May 3 - Added local and EVE times, cleaned up CSS.
				    	{/*<div class="arrow bounce">
							  <a class="fas fa-angle-down fa-2x updates-dn-arrow" href="#"></a>
							</div>*/}
				    	<hr/>
				    	May 5 - Cleaned up CSS, ready to deploy.
				    	<hr/>
				    	May 6 - Deployed 🎉🎉🎉🎉🎉
				   	</p>
				  </div>
				</div>




			</div>
		</div>
		)
}

export default Updates