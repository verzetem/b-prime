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
					<h5 className="card-title">May 7</h5>
						<p className="card-text">
							- Locked first timer row/made timer table scrollable
							<br/>
							- Added confirm delete popup
						</p>
						<hr/>
						<h5 className="card-title">May 6</h5>
						<p className="card-text">
							- Dev build Deployed 🎉🎉🎉🎉🎉
						</p>
						<hr/>
						<h5 className="card-title">May 5</h5>
						<p className="card-text">
							- Cleaned up CSS, ready to deploy
						</p>
						<hr/>
						<h5 className="card-title">May 3</h5>
						<p className="card-text">
							- Added local and EVE times, cleaned up CSS
						</p>
						<hr/>
						<h5 className="card-title">Apr 30</h5>
						<p className="card-text">
							- MVP complete
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Updates;
