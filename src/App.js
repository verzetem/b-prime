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

componentDidMount() {

	this.fetchTimers()
}

fetchTimers = () => {
	// http://localhost:3130/timers
  // https://powerful-beyond-25222.herokuapp.com/timers
	fetch("http://localhost:3130/timers")
	.then(res => res.json())
	.then(timeData => {
		this.setState({ structureInfo: timeData.timers })
		console.log(timeData.timers)
	})
}

notificationActive = () => {
  this.setState({ notification: true })
  setTimeout(() => this.notificationHide(), 3000)
}

notificationHide = () => {
  this.setState({ notification: false })
}

notifMsgGreen = () => {
  let notification = this.state.notification
  let notifClass = !notification ? null : "show"
  return (
    <div id="notif" className={ notifClass }><span className="notif-text">Timer Added</span></div>
    )
}

notificationActiveRed = () => {
  this.setState({ notificationRed: true })
  setTimeout(() => this.notificationHideRed(), 3000)
}

notificationHideRed = () => {
  this.setState({ notificationRed: false })
}

notifMsgRed = () => {
  let notificationRed = this.state.notificationRed
  let notifClassRed = !notificationRed ? null : "show"
  return (
    <div id="notif-red" className={ notifClassRed }><span className="notif-text-red">Timer Deleted</span></div>
    )
}

render() {

  return (

		<Router>
			<div className="countainer-fluid">
				<div className="row">
					<Route path="/" render={ (props) => <Nav structureCount={ this.state.structureInfo.length } /> } />
					<Switch>
						<Route path="/" exact component={ Home } />
						<Route path="/timers" render={ (props) => <Timers /> } />
						<Route component={ NotFound } />
					</Switch>
				</div>
				{ this.notifMsgGreen() }
        { this.notifMsgRed() }
			</div>
		</Router>
  )
}
}

export default App;
