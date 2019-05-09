import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { DateTime } from "luxon"
import swal from "@sweetalert/with-react"
import "./App.scss"

import Home from "./components/Home"
import Nav from "./components/Nav"
import Timers from "./components/Timers"
import NotFound from "./components/NotFound"
import TzModal from "./components/TzModal"
import InfoTile from "./components/InfoTile"

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
    // http://localhost:3130/timers/
    // https://powerful-beyond-25222.herokuapp.com/timers/
    // http://192.168.1.7:3130/timers/
    this.fetchTimers()
  }

  fetchTimers = () => {
    fetch("http://localhost:3130/timers/")
      .then(res => res.json())
      .then(timeData => {
        this.setState({ structureInfo: timeData.timers })
      })
  }

  // functions

  // webhook test

  // webhook = (e) => {
  //   // e.preventDefault()
  //   let url = "https://discordapp.com/api/webhooks/571462934362980357/N2k1543TcMdwA-KGlJTsaZqGXEE_jQeVWGJgL2AzLa_8mI2iNH7GPvlAUAMZjo4fZhVr"
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     content: JSON.stringify("wake n bake!"),
  //     muteHttpExceptions: true
  //   })
  // }

  nameListen = e => {
    let input = e.target.value
    this.setState({
      newStructure: {
        ...this.state.newStructure,
        newName: input
      }
    })
  }

  locationListen = e => {
    let input = e.target.value
    this.setState({
      newStructure: {
        ...this.state.newStructure,
        newLocation: input
      }
    })
  }

  daysListen = e => {
    let input = e.target.value
    this.setState({
      newStructure: {
        ...this.state.newStructure,
        newTime: {
          ...this.state.newStructure.newTime,
          days: input
        }
      }
    })
  }

  hoursListen = e => {
    let input = e.target.value
    this.setState({
      newStructure: {
        ...this.state.newStructure,
        newTime: {
          ...this.state.newStructure.newTime,
          hours: input
        }
      }
    })
  }

  minutesListen = e => {
    let input = e.target.value
    this.setState({
      newStructure: {
        ...this.state.newStructure,
        newTime: {
          ...this.state.newStructure.newTime,
          minutes: input
        }
      }
    })
  }

  secondsListen = e => {
    let input = e.target.value
    this.setState({
      newStructure: {
        ...this.state.newStructure,
        newTime: {
          ...this.state.newStructure.newTime,
          seconds: input
        }
      }
    })
  }

  timeConversion = () => {
    let state = this.state.newStructure.newTime
    // let newTwentyFour = DateTime.local().setZone("Iceland").toFormat('DD TTT')
    let newTimer = DateTime.local()
      .setZone("Iceland")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer + " (EVE)"
  }

  pstConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("America/Los_Angeles")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  mstConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("America/Denver")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  cstConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("America/Menominee")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  estConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("America/Detroit")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  onSubmit = e => {
    e.preventDefault()
    let strucInfo = this.state.structureInfo
    let newStruc = this.state.newStructure
    let newStrucTime = newStruc.newTime
    if (
      newStruc.newName.length === 0 ||
      newStruc.newLocation.length === 0 ||
      newStrucTime.days.length === 0 ||
      newStrucTime.minutes.length === 0 ||
      newStrucTime.hours.length === 0 ||
      newStrucTime.seconds.length === 0
    ) {
      return swal(
        "Error",
        "Please fill out ALL fields and submit again",
        "error"
      )
    }
    let time = this.timeConversion()
    let pst = this.pstConversion()
    let mst = this.mstConversion()
    let cst = this.cstConversion()
    let est = this.estConversion()
    fetch("http://localhost:3130/timers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newStruc.newName,
        location: newStruc.newLocation,
        time: time,
        pst: pst,
        mst: mst,
        cst: cst,
        est: est
      })
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          structureInfo: strucInfo.concat({
            id: response.id,
            name: response.timer.name,
            location: response.timer.location,
            time: response.timer.time,
            pst: pst,
            mst: mst,
            cst: cst,
            est: est
          })
        })
      })
      .catch(error => {
        swal(
        "Error",
        `${error.message}`,
        "error"
        )
      })
    this.resetInput()
    this.notificationActive()
  }

  deleteTimer = (event, timerId) => {
    event.preventDefault()
    let strucInfo = this.state.structureInfo
    strucInfo.map(timer => {
      if (timer.id === timerId) {
        return fetch("http://localhost:3130/timers/" + timerId, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(
          this.setState({
            structureInfo: strucInfo.filter(timer => {
              return timer.id !== timerId
            })
          })
        ).then(
          this.notificationActiveRed()
        ).catch(error => {
        swal(
        "Error",
        `${error.message}`,
        "error"
        )
      })

      } else return null
    })
  }


  deleteWarning = (event, timerId) => {
    return swal({
      dangerMode: "true",
      title: "Warning",
      text: "Are you sure you want to delete this timer?",
      icon: "warning",
      buttons: ["Cancel", "Delete"]
    })
    .then(value => {
      if (!value) {
        return null
      } else {
        this.deleteTimer(event, timerId)
      }
    })
  }

  resetInput = e => {
    this.setState({
      newStructure: {
        newName: "",
        newLocation: "",
        newTime: {
          days: "",
          hours: "",
          minutes: "",
          seconds: ""
        }
      }
    })
  }

  onOpenModal = (e, id) => {
    e.preventDefault()
    let strucInfo = this.state.structureInfo
    strucInfo.filter(timer => {
      if (timer.id === id) {
        return this.setState({
          modalInfo: {
            pst: timer.pst,
            mst: timer.mst,
            cst: timer.cst,
            est: timer.est
          }
        })
      } else return null
    })
    this.setState({ modalOpen: true })
  }

  onCloseModal = () => {
    this.setState({ modalOpen: false })
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
    let notifDefault = "alert alert-success"
    let notifShow = !notification ? "" : " show"
    let notifFade = notification ? "" : " fade"
    if (notification) {
      return (
      <div className={notifDefault + notifShow + notifFade} role="alert">
        Timer Added!
      </div>
      )
    }
  }

  notificationActiveRed = () => {
    this.setState({ notificationRed: true })
    setTimeout(() => this.notificationHideRed(), 3000)
  }

  notificationHideRed = () => {
    this.setState({ notificationRed: false })
  }

  notifMsgRed = () => {
    let notification = this.state.notificationRed
    let notifDefault = "alert alert-danger "
    let notifShow = !notification ? "" : " show"
    let notifFade = notification ? "" : " fade"
    if (notification) {
      return (
        <div className={notifDefault + notifShow + notifFade} role="alert">
          Timer Deleted!
        </div>
        )
    }
  }


  render() {
    return (
      <Router>
        <div className="countainer-fluid">
          <div className="row">
            <Route
              path="/"
              render={props => (
                <Nav structureCount={this.state.structureInfo.length} />
              )}
            />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/timers"
                render={props => (
                  <Timers
                    structureInfo={this.state.structureInfo}
                    newStructure={this.state.newStructure}
                    onSubmit={this.onSubmit}
                    nameListen={this.nameListen}
                    daysListen={this.daysListen}
                    hoursListen={this.hoursListen}
                    minutesListen={this.minutesListen}
                    secondsListen={this.secondsListen}
                    locationListen={this.locationListen}
                    resetInput={this.resetInput}
                    modalOpen={this.state.modalOpen}
                    onOpenModal={this.onOpenModal}
                    onCloseModal={this.onCloseModal}
                    notification={this.state.notification}
                    deleteTimer={this.deleteWarning}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
            <Route path="/" render={props => <InfoTile />} />
          </div>
          { this.notifMsgGreen() }
          { this.notifMsgRed() }
          <TzModal
            timerPST={this.state.modalInfo.pst}
            timerMST={this.state.modalInfo.mst}
            timerCST={this.state.modalInfo.cst}
            timerEST={this.state.modalInfo.est}
            modalOpen={this.state.modalOpen}
            onCloseModal={this.onCloseModal}
          />
        </div>
      </Router>
    )
  }
}

export default App
