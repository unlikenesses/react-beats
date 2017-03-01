import React from 'react';
import Stave from './Stave';

class Staves extends React.Component {

	render() {
		let that = this;
		return (
			<div className="staves">
			{
				this.props.staves.map(function(stave) {
					return <Stave key={stave.id} id={stave.id} toggleActive={that.props.toggleActive} transporterPos={that.props.transporterPos} name={stave.name} notes={stave.notes} />
				})
			}
			</div>
		)
	}
}

export default Staves;