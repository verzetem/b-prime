import React from "react"
import Modal from "react-responsive-modal"

const TzModal = ({
	onCloseModal,
	modalOpen,
	timerPST,
	timerMST,
	timerCST,
	timerEST,
	regionAU,
	regionEU,
	regionNA,
	timerAST,
	timerHST,
	timerAKST,
	timerBST,
	timerWET,
	timerCET,
	timerEET,
	timerMSK,
	timerAEST,
	timerACST,
	timerAWST
}) => {

	if (regionAU) {
		return (
		<Modal open={modalOpen} onClose={onCloseModal} center>
			<h2 className="tz-card">Local TZ Conversions</h2>
			{/*<div class="arrow bounce">
				  <a class="fas fa-angle-down fa-2x tz-dn-arrow" href="#"></a>
				</div>*/}
			<center>
				<h4 className="tz-card">{timerAEST}(AEST)</h4>
				<h4 className="tz-card">{timerACST}(ACST)</h4>
				<h4 className="tz-card">{timerAWST}(AWST)</h4>
			</center>
		</Modal>
		)
	} else if (regionEU) {
		return (
		<Modal open={modalOpen} onClose={onCloseModal} center>
			<h2 className="tz-card">Local TZ Conversions</h2>
			{/*<div class="arrow bounce">
				  <a class="fas fa-angle-down fa-2x tz-dn-arrow" href="#"></a>
				</div>*/}
			<center>
				<h4 className="tz-card">{timerBST}(BST)</h4>
				<h4 className="tz-card">{timerWET}(WET)</h4>
				<h4 className="tz-card">{timerCET}(CET)</h4>
				<h4 className="tz-card">{timerEET}(EET)</h4>
				<h4 className="tz-card">{timerMSK}(MSK)</h4>
			</center>
		</Modal>
		)
	} else if (regionNA) {
		return (
			<Modal open={modalOpen} onClose={onCloseModal} center>
			<h2 className="tz-card">Local TZ Conversions</h2>
			{/*<div class="arrow bounce">
				  <a class="fas fa-angle-down fa-2x tz-dn-arrow" href="#"></a>
				</div>*/}
			<center>
				<h4 className="tz-card">{timerPST}</h4>
				<h4 className="tz-card">{timerMST}</h4>
				<h4 className="tz-card">{timerCST}</h4>
				<h4 className="tz-card">{timerEST}</h4>
				<h4 className="tz-card">{timerAST}</h4>
				<h4 className="tz-card">{timerHST}</h4>
				<h4 className="tz-card">{timerAKST}</h4>
			</center>
		</Modal>
		)
	} else if (regionAU === false && regionEU === false && regionNA === false) {
		return (
			<Modal open={modalOpen} onClose={onCloseModal} center>
			<h2 className="tz-card">Local TZ Conversions</h2>
			{/*<div class="arrow bounce">
				  <a class="fas fa-angle-down fa-2x tz-dn-arrow" href="#"></a>
				</div>*/}
			<center>
				<h4 className="tz-card">Please select region</h4>
			</center>
		</Modal>
		)
	}
}

export default TzModal
