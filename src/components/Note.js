import React from 'react';

class Note extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.toggleActive(this.props.stave, this.props.pos);
	}

	render() {
		return (
			<div className="noteContainer" onClick={this.handleClick}>
				<div className={"note" + (this.props.active ? ' active' : '')}><div className="hilight"></div></div>
			</div>
		)
	}
}

export default Note;