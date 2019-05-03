import React from 'react'
import Modal from 'react-responsive-modal'

const TzModal = ({ onCloseModal, modalOpen, timerPST, timerMST, timerCST, timerEST }) => {

		return (
			<Modal open={ modalOpen } onClose={ onCloseModal } center>
				<h2 className="tz-card">
					Local TZ Conversions
				</h2>
				<center>
				<h4 className="tz-card">{ timerPST }</h4>
				<h4 className="tz-card">{ timerMST }</h4>
				<h4 className="tz-card">{ timerCST }</h4>
				<h4 className="tz-card">{ timerEST }</h4>
				</center>
			</Modal>
			)
		}

export default TzModal