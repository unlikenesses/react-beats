import React from 'react';
import Controls from './Controls';
import Staves from './Staves';
import Transporter from './Transporter';
import Howler from 'howler';
const { Howl } = Howler;

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			transporterPos: 0,
			tempo: 400,
			playing: false,
			staves: [
				{
					'id': 1,
					'name': 'Bass',
					'sample': '../audio/Bass-Drum-1.mp3',
					'notes': [
						{'pos': 0, 'active': false},
						{'pos': 1, 'active': false},
						{'pos': 2, 'active': false},
						{'pos': 3, 'active': false},
						{'pos': 4, 'active': false},
						{'pos': 5, 'active': false},
						{'pos': 6, 'active': false},
						{'pos': 7, 'active': false}
					]
				},
				{
					'id': 2,
					'name': 'Snare',
					'sample': '../audio/Hip-Hop-Snare-1.mp3',
					'notes': [
						{'pos': 0, 'active': false},
						{'pos': 1, 'active': false},
						{'pos': 2, 'active': false},
						{'pos': 3, 'active': false},
						{'pos': 4, 'active': false},
						{'pos': 5, 'active': false},
						{'pos': 6, 'active': false},
						{'pos': 7, 'active': false}
					]
				}
			]
		}
		this.tick = this.tick.bind(this);
		this.checkNote = this.checkNote.bind(this);
		this.playSample = this.playSample.bind(this);
		this.togglePlay = this.togglePlay.bind(this);
		this.changeTempo = this.changeTempo.bind(this);
		this.clearPattern = this.clearPattern.bind(this);
		this.toggleActive = this.toggleActive.bind(this);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	toggleActive(staveId, pos) {
		let staves = this.state.staves;
		for (var stave of staves) {
			if (stave.id === staveId) {
				for (var note of stave.notes) {
					if (note.pos === pos) {
						note.active = !note.active;
					}
				}
			}
		}
		this.setState({ staves: staves });
	}

	tick() {
		let transporterPos = this.state.transporterPos;
		transporterPos++;
		if (transporterPos > 7) {
			transporterPos = 0;
		}
		this.setState({ transporterPos: transporterPos });
		this.checkNote();
	}

	checkNote() {
		let transporterPos = this.state.transporterPos;
		let that = this;
		for (var stave of this.state.staves) {
			for (var note of stave.notes) {
				if (note.active && note.pos === transporterPos) {
					that.playSample(stave.sample);
				}
			}
		}
	}

	playSample(sample) {
		let sound = new Howl({
			src: [sample]
		});
		sound.play();
	}

	calculateTempo(bpm) {
		return 60000 / bpm;
	}

	setTempo() {
		this.timerId = setInterval(() => this.tick(), this.calculateTempo(this.state.tempo));
	}

	changeTempo(tempo) {
		this.setState({ tempo: tempo.target.value });
		if (this.state.playing) {
			clearInterval(this.timerId);
			this.setTempo();
		}
	}

	togglePlay() {
		if (this.state.playing) {
			clearInterval(this.timerId);
			this.setState({ playing: false });
		} else {
			this.setTempo();
			this.setState({ playing: true });
		}
	}

	clearPattern() {
		let staves = this.state.staves;
		for (var stave of staves) {
			for (var note of stave.notes) {
				note.active = false;
			}
		}
		this.setState({ staves: staves });
	}

  	render() {
	    return (
	      <div className="machine">
	        <Controls tempo={this.state.tempo} handleChange={this.changeTempo} togglePlay={this.togglePlay} playing={this.state.playing} clearPattern={this.clearPattern} />
	        <Staves transporterPos={this.state.transporterPos} staves={this.state.staves} toggleActive={this.toggleActive}/>
	        <Transporter pos={this.state.transporterPos}/>
	      </div>
	    );
	}
}

export default App;
