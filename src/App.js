import React from 'react';
import Artist from './component/Artist';
import Search from './component/Search';
import Track from './component/Track';


const URI = "https://spotify-api-wrapper.appspot.com";

export default class App extends React.Component {

  state = {
      artistInfo: null,
      tracks: []
  };

  componentDidMount() {
     this.searchArtist("A R Rehman");
  }

  searchArtist  =(name) => {
    fetch(`${URI}/artist/${name}`)
    .then(response => response.json())
    .then(result => {
      console.log(result);

      if(result.artists.total > 0) {
          const artistInfo = result.artists.items[0];
          this.setState({
            artistInfo
          });

          // find tracks
          fetch(`${URI}/artist/${artistInfo.id}/top-tracks`)
            .then(response => response.json())
            .then(result => {
                console.log('tracks', result.tracks);
                this.setState({
                  tracks: result.tracks
                });
            })
            .catch(err => console.log(err.message));
            
      }
    })
    .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 jumbotron text-center">
              <h3>Music Player</h3>
            </div>
          </div>
         <Search search={this.searchArtist}/>
          <Artist artist={this.state.artistInfo} />
          <Track tracks={this.state.tracks} />
      </div>
    )
  }
}
