import React from "react";

const Updates = () => {
	return (
		<div>
			<button
				className="btn btn-secondary"
				id="updates"
				type="button"
				data-toggle="collapse"
				data-target="#updatesCollapse"
				aria-expanded="false"
				aria-controls="updatesCollapse"
			>
				Updates
			</button>
			<div className="collapse" id="updatesCollapse">
				<div
					className="card text-white bg-dark mb-3"
					style={{ height: "11em" }}
				>
					<div className="card-body update-card">
						<p className="card-text">
							<h5 class="card-title">May 7</h5>
							- Locked first timer row/made timer table scrollable
							<br/>
							- Added confirm delete popup
						</p>
						<hr/>
						<p className="card-text">
							<h5 class="card-title">May 6</h5>
							- Dev build Deployed 🎉🎉🎉🎉🎉
						</p>
						<hr/>
						<p className="card-text">
							<h5 class="card-title">May 5</h5>
							- Cleaned up CSS, ready to deploy
						</p>
						<hr/>
						<p className="card-text">
							<h5 class="card-title">May 3</h5>
							- Added local and EVE times, cleaned up CSS
						</p>
						<hr/>
						<p className="card-text">
							<h5 class="card-title">Apr 30</h5>
							- MVP complete
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Updates;
