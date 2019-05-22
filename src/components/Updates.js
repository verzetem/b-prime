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
						<h5 className="card-title">May 21</h5>
						<p className="card-text">
							- Added countdown timer.
						</p>
						<hr/>
						<h5 className="card-title">May 14</h5>
						<p className="card-text">
							- Added refresh button for table.
							<br/>
							- Added local time conversion to tooltip
							 (hover over the main "Comes Out" timer to see this change)
						</p>
						<hr/>
						<h5 className="card-title">May 11</h5>
						<p className="card-text">
							- Added AU, EU and NA to region list, TZ cards now reflect 
							local time zones of selected region
						</p>
						<hr/>
					<h5 className="card-title">May 11</h5>
						<p className="card-text">
							- Added AU, EU and NA to region list, TZ cards now reflect local time zones
							of selected region
						</p>
						<hr/>
						<h5 className="card-title">May 10</h5>
						<p className="card-text">
							- Added loading indicators for fetch request
						</p>
						<hr/>
						<h5 className="card-title">May 9</h5>
						<p className="card-text">
							- Added new table that is sortable, filterable, and has resizable columns
						</p>
						<hr/>
						<h5 className="card-title">May 7</h5>
						<p className="card-text">
							- Locked first timer row/made timer table scrollable
							<br/>
							- Added confirm delete popup
						</p>
						<hr/>
						<h5 className="card-title">May 6</h5>
						<p className="card-text">
							- Dev build Deployed <span role="img" aria-label="emoji">🎉🎉🎉🎉🎉</span>
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
