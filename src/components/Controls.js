import React from 'react';

class Controls extends React.Component {
	render() {
		const playButtonText = this.props.playing ? 'Stop' : 'Play';
		return (
			<div className="controls">
				<a href="#" className="button" onClick={this.props.togglePlay}>{playButtonText}</a> 
				<a href="#" className="button" onClick={this.props.clearPattern}>Clear Pattern</a> 
				<div className="bpmRange">
					<div className="bpmTitle">BPM:</div><input type="range" id="bpm" min="1" max="420" step="1" defaultValue={this.props.tempo} onChange={this.props.handleChange} /><output htmlFor="bpm" id="bpmOutput">{ this.props.tempo }</output>
				</div>
			</div>
		)
	}
}

export default Controls;