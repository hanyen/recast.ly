class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: false
    };
    if (props.searchYouTube.length === 0) {
      this.state.empty = true;
    }
  }

  render() {
    if (this.state.empty) {
      return (
        <div>
          <Nav />
          <div className="col-md-7">
            <VideoPlayer video={window.fakeVideoData[0]}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={window.fakeVideoData}/>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.props.searchYouTube[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.searchYouTube}/>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

ReactDOM.render(<VideoList videos={exampleVideoData}/>, document.getElementById('app'));

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
