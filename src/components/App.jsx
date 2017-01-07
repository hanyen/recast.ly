class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoListState: [], 
      currentVideoState: null
    };    
  }

  componentDidMount() {
    //var a = this.props.searchYouTube({ key: window.YOUTUBE_API_KEY, query: 'cats', max: 10 });
    this.props.searchYouTube({ key: window.YOUTUBE_API_KEY, query: 'cats', max: 10 }, this.updateVideos.bind(this));
  }

  updateVideos(list) {
    this.setState({
      videoListState: list,
      currentVideoState: list[0]
    });
  }

  clickedVideoEntry(video) {
    this.setState({
      currentVideoState: video
    });
  }

  render() {
    // if (this.state.videoListState.length === 0) {
    //   return (
    //     <div>
    //       <Nav />
    //       <div className="col-md-7">
    //         <div>Loading</div>
    //       </div>
    //       <div className="col-md-5">
    //         <div>Loading</div>
    //       </div>
    //     </div>
    //   );
    // }
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

/*

    this.state = {
      videoListState: [window.exampleVideoData], 
      currentVideoState: window.exampleVideoData[0]
    };

  constructor(props) {
    super(props);
    console.log(window.YOUTUBE_API_KEY);
    var a = props.searchYouTube({ key: window.YOUTUBE_API_KEY, query: 'cats', max: 10 }, () => {});
    this.state = {
      videoListState: window.exampleVideoData, 
      currentVideoState: window.exampleVideoData[0]
    }; 

  }
  componentWillMount() {
    //var a = this.props.searchYouTube({ key: window.YOUTUBE_API_KEY, query: 'cats', max: 10 });
    this.setState({
      videoListState: this.props.searchYouTube({ key: window.YOUTUBE_API_KEY, query: 'cats', max: 10 }, () => {})
    });
    this.setState({
      currentVideoState: this.state.videoListState[0]
    });
    this.render();
  }

*/







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
