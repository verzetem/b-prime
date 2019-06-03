import React from "react";
import ReactTable from 'react-table'
import ReactTooltip from 'react-tooltip'
import Modal from 'react-responsive-modal'
import Countdown from 'react-countdown-now'

import AddTimerModal from "./AddTimerModal"

// return <Countdown date={Date.now() + date3} />
// let newTwentyFour = DateTime.local().setZone("Iceland").toFormat('DD TTT')

  // {
  //   filterable: false,
  //   Header: 'TZ Card',
  //   accessor: 'null', // String-based value accessors!
  //   Cell: props => <span className="badge badge-info" onClick={e => onOpenModal(e, props.original.id)}>Open</span>
  // },

const NewTable = ({ onSubmit, loading2, selected, resetInput, nameListen, typeListen, daysListen, hoursListen, minutesListen, secondsListen, locationListen, structureInfo, newStructure, onOpenModal, onCloseModal, modalOpen, deleteTimer, refreshTimers, countDown, spookyWebhook, convertToggle, twentyFourTwelve, timeToggle }) => {

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <span style={{backgroundColor: "rgba(255,0,0,0.2)", borderRadius: "3px", padding: "0 0.3em 0 0.3em"}}>Delete Timer</span>;
    } else if (days === 0 && hours === 0 && minutes < 30) { 
      return <span style={{backgroundColor: "rgba(255,0,0,0.2)", borderRadius: "3px", padding: "0 0.3em 0 0.3em"}}>{days}d {hours}h {minutes}m {seconds}s</span>
    } else if (days === 0 && hours < 24) {
      return <span style={{backgroundColor: "rgba(255,150,0,0.5)", borderRadius: "3px", padding: "0 0.3em 0 0.3em"}}>{days}d {hours}h {minutes}m {seconds}s</span>
    } else if (days === 1 && hours < 24) {
      return <span>{days}d {hours}h {minutes}m {seconds}s</span>
    } else {
      return null
    }
  }

  const options = {   
      year: 'numeric',
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
      hour12: false
      // new Date(props.original.time).toLocaleDateString('en-US', options)
    }

  const columns = [{
    Header: 'Structure Name',
    accessor: 'name', // String-based value accessors!
    Cell: props => <span>{props.value}</span>,
    maxWidth: "400"
  }, {
    Header: 'Type',
    accessor: 'type', // String-based value accessors!
    Cell: props => <span>{props.value}</span>,
    maxWidth: "100"
  }, {
    Header: 'Location',
    accessor: 'location', // String-based value accessors!
    Cell: props => <span>{props.value}</span>,
    maxWidth: "120"
  }, {
    filterable: false,
    Header: 'Comes Out',
    accessor: 'time', // String-based value accessors! {/*data-tip={fuckTime2(props.original.time)}*/} data-event="click focus"
    // sortMethod: (a, b) => {  } ,
    Cell: props => <span data-tip={new Date(props.original.time).toLocaleDateString('en-US', options)}>{twentyFourTwelve(props.value)}<ReactTooltip type="info" effect="solid"/></span>,
    maxWidth: "250"
  }, {
    filterable: false,
    Header: 'Countdown',
    accessor: 'null', // String-based value accessors!
    Cell: props => <Countdown onTick={(time) => spookyWebhook(time) } renderer={renderer} date={countDown(props.original.time)} /> ,
    maxWidth: "150"
  }, {
  	filterable: false,
    Header: ' ',
    accessor: 'null', // String-based value accessors!
    Cell: props => <span className="badge badge-danger" onClick={e => deleteTimer(e, props.original.id)}>Delete</span>,
    maxWidth: "100"
  }]

	return (
    
		<div className="table-wrapper">
      <button className="btn btn-dark" type="button" style={{ margin: "0 !important" }} onClick={() => onOpenModal()}>Add Timer</button>
      <button className="btn btn-dark" data-tip="Refresh table" type="button" style={{ margin: "0 !important" }} onClick={() => refreshTimers()}><i className="fas fa-sync-alt"></i></button>
      <button className="btn btn-dark" data-tip="24h / 12h" type="button" style={{ margin: "0 !important" }} onClick={() => convertToggle()}><i className="fas fa-clock"></i></button>
			<ReactTable
				className="-striped -highlight"
		    data={structureInfo}
		    columns={columns}
		    pageSizeOptions={[5, 10, 20, 50]}
  			defaultPageSize={5}
  			filterable={true}
		  />
      <AddTimerModal 
        modalOpen={modalOpen} 
        onCloseModal={onCloseModal}
        newStructure={newStructure}
        onSubmit={onSubmit}
        resetInput={resetInput}
        nameListen={nameListen}
        daysListen={daysListen}
        hoursListen={hoursListen}
        minutesListen={minutesListen}
        secondsListen={secondsListen}
        locationListen={locationListen}
        typeListen={typeListen}
        selected={selected}
        loading2={loading2}
      />
		</div>
	);
};

export default NewTable;
