var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange={props.newSearch} className="form-control" type="text" />
    <button onClick={props.newSearch} className="btn ">  
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// hidden-sm-down

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
