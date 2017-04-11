import React from 'react';
import PropTypes from 'prop-types';
import TransporterBlank from './TransporterBlank';

class Transporter extends React.Component {
	render() {
		return (
			<div className="transporterContainer">
				<TransporterBlank/>
				<TransporterBlank/>
				<TransporterBlank/>
				<TransporterBlank/>
				<TransporterBlank/>
				<TransporterBlank/>
				<TransporterBlank/>
				<TransporterBlank/>
				<div className="transporter">					
					<div className="transportLight transportLightActive" style={{left: this.props.pos * 100 + 'px'}}><div className="hilight"></div></div>
				</div>
			</div>
		)
	}
}

Transporter.propTypes = {
	pos: PropTypes.number.isRequired
}

export default Transporter;