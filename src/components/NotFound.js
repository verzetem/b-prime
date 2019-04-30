import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className="home">
			<h1>Page Not Found.</h1>
			Return <Link to="/">Home</Link> ?
		</div>
		)
}

export default NotFound