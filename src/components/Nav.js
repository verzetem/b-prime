import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
	return (
		<div className="col-sm-2">
			<div className="nav">
				<div className="logo">
					<h6>BOREDOM PRIME</h6>
				</div>
				<div className="row">
				  <nav className="nav flex-column">
					  <span className="link-style"><Link className="nav-link" to="/">Home</Link></span>
					  <span className="link-style"><Link className="nav-link" to="/">Timers</Link></span>
					  <a className="nav-link disabled" href="#">Dscan</a>
					</nav>
					</div>
			</div>
		</div>
		)
}

export default Nav