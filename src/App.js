import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { DateTime } from "luxon"
import swal from "@sweetalert/with-react"
import Loader from 'react-loader-spinner'
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
      est: "",
      ast: "",
      hst: "",
      akst: "",
      bst: "",
      wet: "",
      cet: "",
      eet: "",
      msk: "",
      aest: "",
      acst: "",
      awst: ""
    },
    au: false,
    eu: false,
    na: false,
    notification: false,
    notificationRed: false,
    loading: false,
    loading2: false,
    interval: false //temporary
  }

  componentDidMount() {
    // http://localhost:3130/timers/
    // https://powerful-beyond-25222.herokuapp.com/timers/
    // http://192.168.1.7:3130/timers/
    // https://frozen-garden-66478.herokuapp.com/timers/ (NEW DB)
    this.setState({ loading: true})
    setTimeout(() => this.fetchTimers(), 1000)
    setInterval(() => { this.setState({ interval: !this.state.interval }) }, 1000) // temp solution
  }

  fetchTimers = () => {
    fetch("http://localhost:3130/timers/")
      .then(res => res.json())
      .then(timeData => {
        this.setState({ structureInfo: timeData.timers });
        this.setState({ loading: false })
      }).catch(error => {
        swal("Error", `${error.message}`, "error");
      }).then(() => this.setState({ loading: false }) )
  }

  ////////// webhook test //////////
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

  astConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("America/Glace_Bay")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  hstConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("Pacific/Honolulu")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  akstConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("America/Anchorage")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  bstConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("Europe/London")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  wetConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("Atlantic/Canary")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  cetConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("Europe/Brussels")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  eetConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("Europe/Bucharest")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  mskConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("Europe/Moscow")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  aestConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("Australia/Melbourne")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  acstConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("Australia/Darwin")
      .plus({
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
      })
      .toFormat("DD TTT")
    return newTimer
  }

  awstConversion = () => {
    let state = this.state.newStructure.newTime
    let newTimer = DateTime.local()
      .setZone("Australia/Perth")
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
    const time = this.timeConversion()
    const pst = this.pstConversion()
    const mst = this.mstConversion()
    const cst = this.cstConversion()
    const est = this.estConversion()
    const ast = this.astConversion()
    const hst = this.hstConversion()
    const akst = this.akstConversion()
    const bst = this.bstConversion()
    const wet = this.wetConversion()
    const cet = this.cetConversion()
    const eet = this.eetConversion()
    const msk = this.mskConversion()
    const aest = this.aestConversion()
    const acst = this.acstConversion()
    const awst = this.awstConversion()
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
        est: est,
        ast: ast,
        hst: hst,
        akst: akst,
        bst: bst,
        wet: wet,
        cet: cet,
        eet: eet,
        msk: msk,
        aest: aest,
        acst: acst,
        awst: awst
      })
    }).then(response => response.json())
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
            est: est,
            ast: ast,
            hst: hst,
            akst: akst,
            bst: bst,
            wet: wet,
            cet: cet,
            eet: eet,
            msk: msk,
            aest: aest,
            acst: acst,
            awst: awst
          })
        })
      }).catch(error => {
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
            est: timer.est,
            ast: timer.ast,
            hst: timer.hst,
            akst: timer.akst,
            bst: timer.bst,
            wet: timer.wet,
            cet: timer.cet,
            eet: timer.eet,
            msk: timer.msk,
            aest: timer.aest,
            acst: timer.acst,
            awst: timer.awst
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

  onRegionChange = (e) => {
    switch (e.target.value) {
      case "au": 
        this.setState({ au: true, eu: false, na: false });
        break;
      case "eu": 
        this.setState({ au: false, eu: true, na: false });
        break;
      case "na": 
        this.setState({ au: false, eu: false, na: true });
        break;
      default: 
        this.setState({ au: false, eu: false, na: false })
        break;
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
                    loading={this.state.loading}
                    onRegionChange={this.onRegionChange}
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
            regionAU={this.state.au}
            regionEU={this.state.eu}
            regionNA={this.state.na}
            timerPST={this.state.modalInfo.pst}
            timerMST={this.state.modalInfo.mst}
            timerCST={this.state.modalInfo.cst}
            timerEST={this.state.modalInfo.est}
            timerAST={this.state.modalInfo.ast}
            timerHST={this.state.modalInfo.hst}
            timerAKST={this.state.modalInfo.akst}
            timerBST={this.state.modalInfo.bst}
            timerWET={this.state.modalInfo.wet}
            timerCET={this.state.modalInfo.cet}
            timerEET={this.state.modalInfo.eet}
            timerMSK={this.state.modalInfo.msk}
            timerAEST={this.state.modalInfo.aest}
            timerACST={this.state.modalInfo.acst}
            timerAWST={this.state.modalInfo.awst}
            modalOpen={this.state.modalOpen}
            onCloseModal={this.onCloseModal}
          />
        </div>
      </Router>
    )
  }
}

export default App
