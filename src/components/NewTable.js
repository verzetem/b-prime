import React from "react";
import ReactTable from 'react-table'


const NewTable = ({ structureInfo, onOpenModal, deleteTimer }) => {
 
  const columns = [{
    Header: 'Structure Name',
    accessor: 'name' // String-based value accessors!
  },{
    Header: 'Location',
    accessor: 'location' // String-based value accessors!
  }, {
    filterable: false,
    Header: 'Comes Out',
    accessor: 'time' // String-based value accessors!
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
			<ReactTable
				className="-striped -highlight"
		    data={structureInfo}
		    columns={columns}
		    pageSizeOptions={[5, 10]}
  			defaultPageSize={5}
  			filterable={true}
		  />
		</div>
	);
};

export default NewTable;
