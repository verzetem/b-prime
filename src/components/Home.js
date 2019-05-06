import React from 'react'

const Home = () => {
	return (
		<div className="col-md-7 home">
			<h1>
				Welcome
			</h1> 
			<hr />
			<div className="home-desc">
				<p>To <strong style={{ borderBottom: "3px solid #85B9EE", color: "#85B9EE" }}>Boredom Prime</strong>, a web app that converts <strong>time zones</strong> for reinforcement timers on structures within the game of <strong>EVE Online</strong>.</p>
				<p>This web app has potential to become more than just a structure timer helper, and I plan to implement my own <strong>Dscan</strong> page because why not. Stay tuned.</p>
				<br />
				<p>Please, send any suggestions (<strong style={{ color: "orange" }}>and especially bugs</strong>) to <strong style={{ borderBottom: "3px solid #85B9EE", color: "#85B9EE" }}>Rocar Evaal</strong></p>
				<p style={{ color: "red" }}>P.S. web app is for desktop/laptop displays *only* at this time. Mobile responsiveness coming soon.</p>
			</div>
			
		</div>
		)
}

export default Home