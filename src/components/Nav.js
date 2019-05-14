import React from "react";
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner'

// {window.location.pathname === "/" ? "nav-button active" : "nav-button"}

const Nav = ({ structureCount, loading }) => {

	const loaderSpinner = <Loader type="ThreeDots" color="#000" height="20"	width="20" />
	const conditionalSpinner = loading ? <span className="badge badge-light">{loaderSpinner}</span> : <span className="badge badge-light">{structureCount}</span>

	return (
		<div
			className="col-sm-2"
			style={{ marginRight: "auto !important", marginLeft: "auto !important" }}
		>
			<div
				className="nav"
				style={{
					marginRight: "auto !important",
					marginLeft: "auto !important"
				}}
			>
				<div className="logo">
					<h6>BOREDOM PRIME</h6>
				</div>
				<div className="row">
					<nav className="nav flex-column">
						<span
							className={
								window.location.pathname === "/" ? "link-active" : "link-style"
							}
						>
							<Link className="nav-link" to="/">
								Home
							</Link>
						</span>
						<span
							className={
								window.location.pathname === "/timers"
									? "link-active"
									: "link-style"
							}
						>
							<Link className="nav-link" to="/timers">Timers {conditionalSpinner}</Link>
						</span>
						<a className="nav-link disabled" href="/">
							Dscan
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Nav;
