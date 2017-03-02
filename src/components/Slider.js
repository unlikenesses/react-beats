import React from 'react';

class Slider extends React.Component {
	render() {
		return (
			<div className="bpmRange">
				<div className="bpmTitle">BPM:</div><input type="range" id="bpm" min="1" max="420" step="1" defaultValue={this.props.bpm} onChange={this.props.handleChange} /><output htmlFor="bpm" id="bpmOutput">{ this.props.bpm }</output>
			</div>
		)
	}
}

export default Slider;