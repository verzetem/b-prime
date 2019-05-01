import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className="home">
			<h1>Page Not Found.</h1>
			Return <Link className="return-home" to="/">Home</Link>?

			<Redirect to="/" />
		</div>
		)
}

export default NotFound