import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { DateTime } from 'luxon'
import './App.scss';

import Home from './components/Home'
import Nav from './components/Nav'
import Timers from './components/Timers'

function App() {
  return (

		<Router>
			<div className="countainer-fluid">
				<div className="row">
					{/*structureCount={ this.state.structureInfo.length }*/}
					<Route path="/" render={ (props) => <Nav /> } />
					<Route path="/" exact component={ Home } />
					<Switch>
						<div className="col-sm-10">
						<Route path="/timers" exact component={ Timers } />
						{/*<Route component={ NotFound } />*/}
						</div>
					</Switch>
				</div>
			</div>
			</Router>
  )
}

export default App;
