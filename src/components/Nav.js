import React from 'react'
import { Link } from "react-router-dom"
import Updates from './Updates'

// {window.location.pathname === "/" ? "nav-button active" : "nav-button"}

const Nav = ({ structureCount }) => {
	return (
		<div className="col-sm-2" style={{ marginRight: "auto !important", marginLeft: "auto !important" }}>
			<div className="nav" style={{ marginRight: "auto !important", marginLeft: "auto !important" }}>
				<div className="logo">
					<h6>BOREDOM PRIME</h6>
				</div>
				<div className="row">
				  <nav className="nav flex-column">
					  <span className={window.location.pathname === "/" ? "link-active" : "link-style"}><Link className="nav-link" to="/">Home</Link></span>
					  <span className={window.location.pathname === "/timers" ? "link-active" : "link-style"}><Link className="nav-link" to="/timers">Timers <span className="badge badge-light">{ structureCount }</span></Link></span>
					  <a className="nav-link disabled" href="/">Dscan</a>
					</nav>
					</div>
			</div>
		</div>
		)
}

export default Nav