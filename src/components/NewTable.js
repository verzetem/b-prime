import React from "react";
import ReactTable from 'react-table'
import ReactTooltip from 'react-tooltip'
import Countdown from 'react-countdown-now';

// return <Countdown date={Date.now() + date3} />


const NewTable = ({ structureInfo, onOpenModal, deleteTimer, refreshTimers, countDown, spookyWebhook }) => {
 
  const columns = [{
    Header: 'Structure Name',
    accessor: 'name' // String-based value accessors!
  },{
    Header: 'Location',
    accessor: 'location' // String-based value accessors!
  }, {
    filterable: false,
    Header: 'Comes Out',
    accessor: 'time', // String-based value accessors!  data-event='click focus'
    Cell: props => <span data-tip={props.original.local}>{props.value}<ReactTooltip type="info" effect="solid"/></span>
  }, {
    filterable: false,
    Header: 'Countdown',
    accessor: 'null', // String-based value accessors!
    Cell: props => <Countdown date={countDown(props.original.local)} />
  }, {
  	filterable: false,
    Header: 'TZ Card',
    accessor: 'null', // String-based value accessors!
    Cell: props => <span className="badge badge-info" onClick={e => onOpenModal(e, props.original.id)}>Open</span>
  }, {
  	filterable: false,
    Header: ' ',
    accessor: 'null', // String-based value accessors!
    Cell: props => <span className="badge badge-danger" onClick={e => deleteTimer(e, props.original.id)}>Delete</span>
  }]

	return (
    
		<div>
      
      <button className="btn btn-dark" data-tip="Refresh table" type="button" style={{ margin: "0 !important" }} onClick={() => refreshTimers()}><i className="fas fa-sync-alt"></i></button>
			<ReactTable
				className="-striped -highlight"
        controlled={false}
		    data={structureInfo}
		    columns={columns}
		    pageSizeOptions={[5, 10, 20, 50, 100]}
  			defaultPageSize={5}
  			filterable={true}
        onTick={() => spookyWebhook()}
        getTrProps={(state, rowInfo, column) => {
          return {
            style: {
              backgroundColor: 19 > 20 ? 'rgba(255,0,0,0.2)' : 'null'
            }
          }
        }}
		  />
		</div>
	);
};

export default NewTable;
