import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { DateTime } from 'luxon'
import './App.scss';

import Home from './components/Home'
import Nav from './components/Nav'
import Timers from './components/Timers'
import NotFound from './components/NotFound'



class App extends Component {
	state = {
    structureInfo: [],
    newStructure: {
      newName: "",
      newLocation: "",
      newTime: {
        days: "",
        hours: "",
        minutes: "",
        seconds: ""
      }
    },
    modalOpen: false,
    modalInfo: {
      pst: "",
      mst: "",
      cst: "",
      est: ""
    },
    notification: false,
    notificationRed: false
  }

render() {

  return (

		<Router>
			<div className="countainer-fluid">
				<div className="row">
					{/*structureCount={ this.state.structureInfo.length }*/}
					<Route path="/" render={ (props) => <Nav /> } />
					<Switch>
						<Route path="/" exact component={ Home } />
						<Route path="/timers" render={ (props) => <Timers /> } />
						<Route component={ NotFound } />
					</Switch>
				</div>
			</div>
		</Router>
  )
}
}

export default App;
