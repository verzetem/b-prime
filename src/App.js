import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { DateTime } from "luxon"
import './App.scss';

import Nav from './components/Nav'

function App() {
  return (
    <div className="container-fluid">
		  <div className="row">
		    <Nav />
		    <div className="col-sm-10">

		    </div>
		  </div>
		</div>
  );
}

export default App;
