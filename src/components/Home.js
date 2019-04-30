import React from 'react'

const Home = () => {
	return (
		<div className="home">
			<h1>
				Welcome
			</h1> 
			<hr />
			<div className="home-desc">
				<p>To <strong style={{ borderBottom: "3px solid #85B9EE", color: "#85B9EE" }}>Boredom Prime</strong>, a web app that converts <strong>time zones</strong> for the reinforcement timers on structures within the game of <strong>EVE Online</strong>.</p>
				<p>This web app has potential to become more than just a structure timer helper, and I plan to implement my own <strong>Dscan</strong> page. Stay tuned.</p>
				<br />
				<p>Please, send any suggetsions (<strong style={{ color: "orange" }}>and especially bugs</strong>) to <strong style={{ borderBottom: "3px solid #85B9EE", color: "#85B9EE" }}>Rocar Evaal</strong></p>
			</div>
			
		</div>
		)
}

export default Home