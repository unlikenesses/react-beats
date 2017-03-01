import React from 'react';

class Transporter extends React.Component {
	render() {
		return (
			<div className="transporterContainer">
				<div className="transporter">
					<div className="transportLight transportLightActive" style={{left: this.props.pos * 100 + 'px'}}><div className="hilight"></div></div>
				</div>
			</div>
		)
	}
}

export default Transporter;