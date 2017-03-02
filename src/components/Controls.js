import React from 'react';
import Slider from './Slider';

class Controls extends React.Component {
	render() {
		const playButtonText = this.props.playing ? 'Stop' : 'Play';
		return (
			<div className="controls">
				<a href="#" className="button" onClick={this.props.togglePlay}>{playButtonText}</a> 
				<a href="#" className="button" onClick={this.props.clearPattern}>Clear Pattern</a> 
				<Slider bpm={this.props.bpm} handleChange={this.props.handleChange}/>
			</div>
		)
	}
}

export default Controls;