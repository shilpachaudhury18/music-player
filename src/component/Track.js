import React, { Component } from 'react';

export default class Track extends Component {

	state = {
		playing: false,
		audio: null,
		previewUrl: null
	};

	// audio player
	playAudio = (url) => {
		const audio = new Audio(url);

		// initial play
		if(!this.state.playing) {
			audio.play();
			this.setState({
				playing: true,
				audio,
				previewUrl: url
			});
		} else {
			// pause 
			this.state.audio.pause();

			// from pause to play
			if(this.state.previewUrl === url) {
				this.setState({ playing: false });
			} else {
				audio.play();
				this.setState({
					audio,
					previewUrl: url
				});
			}
		}
	}

	// play icons

	trackIcon = (url) => {
		if(!url) {
			return <span>No track</span>;
		} 

		if(this.state.playing && this.state.previewUrl === url) {
			return <span className="glyphicon glyphicon-pause"></span>;
		}

		return <span className="glyphicon glyphicon-play"></span>;
	}


	
	render() {
		const { tracks }  = this.props;

		return (
			<div className="row">
				{
					tracks.map((item,key) => {
						return (
							<div className="col-md-4" key={key}>
								<div className="panel panel-primary" onClick={()=> this.playAudio(item.preview_url)} >
									<div className="panel-heading">
										<h3 className="panel-title"> { item.name } </h3>
									</div>
									<div className="panel-body">
										<img src={item.album.images[1].url} alt="" className="img-responsive img-circle"/>
									</div>
									<div className="panel-footer">
										<button className="btn btn-primary">
											{ this.trackIcon(item.preview_url) }
										</button>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		);
	}
}
