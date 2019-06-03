import React from "react"
import Modal from "react-responsive-modal"

import AddTimer from "./AddTimer"

const AddTimerModal = ({
	onCloseModal,
	modalOpen,
	onSubmit,
	newStructure,
	resetInput,
	nameListen,
	daysListen,
	hoursListen,
	minutesListen,
	secondsListen,
	locationListen,
	loading2,
	typeListen,
	selected
}) => {
	return (
		<Modal open={modalOpen} onClose={onCloseModal} center>
			{/*<div class="arrow bounce">
				  <a class="fas fa-angle-down fa-2x tz-dn-arrow" href="#"></a>
				</div>*/}
			<AddTimer 
				onSubmit={onSubmit}
				newStructure={newStructure}
				resetInput={resetInput}
				nameListen={nameListen}
				daysListen={daysListen}
				hoursListen={hoursListen}
				minutesListen={minutesListen}
				secondsListen={secondsListen}
				locationListen={locationListen}
				loading2={loading2}
				typeListen={typeListen}
				selected={selected} 
			/>
			<div style={{ textAlign: "center", paddingBottom: "-9em" }}>
				<button onClick={onCloseModal} className="btn btn-secondary">Close</button>
			</div>
		</Modal>
		)
}

export default AddTimerModal