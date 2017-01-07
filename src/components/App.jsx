class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoListState: window.fakeVideoData, 
      currentVideoState: window.fakeVideoData[0]
    };
    if (props.searchYouTube.length > 0) {
      this.setState({
        videoListState: props.searchYouTube,
        currentVideoState: props.searchYoutube[0]
      });
    }
  }

  clickedVideoEntry(video) {
    this.setState({
      currentVideoState: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideoState}/>
        </div>
        <div className="col-md-5">
          <VideoList whenClicked={this.clickedVideoEntry.bind(this)} videos={this.state.videoListState}/>
        </div>
      </div>
    );
  }
}

//onClick={this.clickedVideoEntry}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
ReactDOM.render(<App searchYouTube={window.fakeVideoData}/>, document.getElementById('app'));
//clickHandler={this.clickedVideoEntry.bind(this)}
// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList/>
//     </div>
//   </div>
// );

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.App = App;
