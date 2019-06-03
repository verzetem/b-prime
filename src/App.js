import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { DateTime } from "luxon"
import swal from "@sweetalert/with-react"
import Loader from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.scss"

import Home from "./components/Home"
import Nav from "./components/Nav"
import Timers from "./components/Timers"
import NotFound from "./components/NotFound"
import InfoTile from "./components/InfoTile"

class App extends Component {
  state = {
    structureInfo: [],
    zkbInfo: [],
    newStructure: {
      newName: "",
      newLocation: "",
      newTime: {
        days: "",
        hours: "",
        minutes: "",
        seconds: ""
      },
      newType: ""
    },
    modalOpen: false,
    loading: false,
    loading2: false,
    timeToggle: false,
    selected: ""
  }

  componentDidMount() {
    // http://localhost:3030/timers/
    // http://192.168.1.7:3130/timers/
    // https://mighty-waters-39952.herokuapp.com/timers/ (NEW NEW DB)
    // https://frozen-garden-66478.herokuapp.com/timers/ (NEW DB)
    this.fetchTimers()
    this.notifyMounted()
  }

  fetchTimers = () => {
    this.setState({ loading: true })
    fetch("https://mighty-waters-39952.herokuapp.com/timers")
      .then(res => res.json())
      .then(timeData => {
        this.setState({ structureInfo: timeData.timers });
        this.setState({ loading: false })
      }).catch(error => {
        swal("Error", `${error.message}`, "error");
      }).then(() => this.setState({ loading: false }) )
  }

  /// webhook test discord /// 
  spookyWebhook = (time) => {
    const t = time
    const url = "https://mighty-waters-39952.herokuapp.com/ping"
    if (t.days === 0 && t.hours === 0 && t.minutes === 59 && t.seconds === 59 ) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: "<@&479394031323840513>  Less than **1 hour** until next timer." })
      })
    } else if (t.days === 0 && t.hours === 0 && t.minutes === 29 && t.seconds === 59) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: "<@&479394031323840513> Less than **30 minutes** until next timer." })
      })
    } else {
      return null
    }
  }

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

  typeListen = e => {
    let input = e.target.value
    this.setState({
      newStructure: {
        ...this.state.newStructure,
        newType: input
      }
    })
    this.setState({selected: input})
  } 

  timeConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("Iceland")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
    return newTimer
  }

  convertToggle = () => {
    this.setState({ timeToggle: !this.state.timeToggle })
  }

  twentyFourTwelve = (time) => {
    if (this.state.timeToggle === false) {
      return DateTime.fromISO(time).setZone("Iceland").toFormat("DD TTT") // 24 hour
    } else {
      return DateTime.fromISO(time).setZone("Iceland").toFormat("DD ttt") // 12 hou
    }
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({ loading2: true })
    let strucInfo = this.state.structureInfo
    let newStruc = this.state.newStructure
    let newStrucTime = newStruc.newTime
      if (
        newStruc.newName.length === 0 &&
        newStruc.newType.length === 0 &&
        newStruc.newLocation.length === 0 &&
        newStrucTime.days.length === 0 &&
        newStrucTime.hours.length === 0 &&
        newStrucTime.minutes.length === 0 &&
        newStrucTime.seconds.length === 0
        )
        { return swal(
          "Error",
          "Please enter more data about structure timer.",
          "error"
          ) && this.setState({ loading2: false }) 
        } else if (newStruc.newName.length === 0) {
          return swal(
        "Error",
        "Please fill out name field.",
        "error"
      ) && this.setState({ loading2: false }) 
    } else if (newStruc.newType.length === 0) {
      return swal(
        "Error",
        "Please fill out location field.",
        "error"
      ) && this.setState({ loading2: false })
    } else if (newStruc.newLocation.length === 0) {
      return swal(
        "Error",
        "Please pick timer type (i.e. shield, armor, hull).",
        "error"
      ) && this.setState({ loading2: false })
    } else if (newStrucTime.days.length === 0) {
      return swal(
        "Error",
        "Please fill out days field.",
        "error"
      ) && this.setState({ loading2: false })
    } else if (newStrucTime.hours.length === 0) {
      return swal(
        "Error",
        "Please fill out hours field.",
        "error"
      ) && this.setState({ loading2: false })
    } else if (newStrucTime.minutes.length === 0) {
      return swal(
        "Error",
        "Please fill out minutes field.",
        "error"
      ) && this.setState({ loading2: false }) 
    } else if (newStrucTime.seconds.length === 0) {
      return swal(
        "Error",
        "Please fill out seconds field.",
        "error"
      ) && this.setState({ loading2: false })
    }
    const time = this.timeConversion()
    setTimeout(() => {
    fetch("https://mighty-waters-39952.herokuapp.com/timers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newStruc.newName,
        location: newStruc.newLocation,
        time: time,
        type: newStruc.newType
      })
    }).then(response => response.json())
      .then(response => {
        this.setState({
          structureInfo: strucInfo.concat({
            id: response.id,
            name: response.timer.name,
            location: response.timer.location,
            time: response.timer.time,
            type: response.timer.type
          })
        });
        this.setState({loading2: false });
      }).catch(error => {
        this.setState({ loading2: false });
        swal(
          "Error",
          `${error.message}`,
          "error"
          );
      })
    }, 1000)
      this.resetInput()
      this.notifyAdded()
    }

  deleteTimer = (event, timerId) => {
    event.preventDefault()
    let strucInfo = this.state.structureInfo
    strucInfo.map(timer => {
      if (timer.id === timerId) {
        return fetch("https://mighty-waters-39952.herokuapp.com/timers/" + timerId, {
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
          this.notifyDeleted()
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

  selectDefault = () => {
    this.setState({
      selected: "Confirm"
    })
  }  

  resetInput = e => {
    this.selectDefault()
    this.setState({
      newStructure: {
        newName: "",
        newLocation: "",
        newTime: {
          days: "",
          hours: "",
          minutes: "",
          seconds: ""
        },
        newType: ""
      }
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
    if (notification) {
      return (
      <div className="alert alert-success" role="alert">
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
    if (notification) {
      return (
        <div className="alert alert-danger" role="alert">
          Timer Deleted!
        </div>
        )
    }
  }

  refreshTimers = () => {
    this.notifyRefresh();
    this.fetchTimers();
  }

  loaderSpinner = () => {
    if (this.state.loading === false) {
      return null
    } else {
      return (
      <Loader 
         type="Triangle"
         color="#FFF"
         height="100"  
         width="100"
      />
      )
    }
  }

  countDown = (futureDate) => {
    let date = new Date(futureDate).getTime()
    let date2 = Date.now()
    let date3 = date - date2
    let date4 = Date.now() + date3
    return date4
  }

  notifyAdded = () => toast.success("Timer Added!", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  })

  notifyDeleted = () => toast.error("Timer Deleted", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  })

  notifyRefresh = () => toast.info("Refreshing...", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  })

  notifyMounted = () => toast("Fetching data...", {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  })

  onOpenModal = () => {
    this.setState({ modalOpen: true })
  }

  onCloseModal = () => {
    this.setState({ modalOpen: false })
    this.resetInput()
  }
  
  pageSize = () => {
    let structureInfo = this.state.structureInfo.length
    if (structureInfo < 5) {
      return ([5])
    } else if (structureInfo > 5 && structureInfo <= 10) {
      return ([5, 10])
    } else if (structureInfo > 10 && structureInfo <= 20) {
      return ([5, 10, 20])
    } else if (structureInfo > 20 && structureInfo <= 30) {
      return ([5, 10, 20, 30])
    } else if (structureInfo > 30 && structureInfo <= 40) {
      return ([5, 10, 20, 30, 40])
    } else if (structureInfo > 40 && structureInfo <= 50) {
      return ([5, 10, 20, 30, 40, 50])
    } else {
      return null
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
                <Nav structureCount={this.state.structureInfo.length} loading={this.state.loading} />
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
                    loading={this.state.loading}
                    loading2={this.state.loading2}
                    fetchTimers={this.fetchTimers}
                    refreshTimers={this.refreshTimers}
                    countDown={this.countDown}
                    spookyWebhook={this.spookyWebhook}
                    twentyFourTwelve={this.twentyFourTwelve}
                    convertToggle={this.convertToggle}
                    timeToggle={this.state.timeToggle}
                    typeListen={this.typeListen}
                    selected={this.state.selected}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
            <Route path="/" render={props => <InfoTile />} />
          </div>
          <ToastContainer />
        </div>
      </Router>
    )
  }
}

export default App
