import React from 'react';
import Note from './Note';

class Stave extends React.Component {

	render() {
		let that = this;
		return (
			<div className="stave">
				<div className="staveName">{this.props.name} - {this.props.transporterPos}</div>
				{
					this.props.notes.map(function(note, index) {
						return <Note key={index} stave={that.props.id} transporterPos={that.props.transporterPos} pos={note.pos} active={note.active} toggleActive={that.props.toggleActive} />
					})
				}
			</div>
		)
	}
}

export default Stave;
