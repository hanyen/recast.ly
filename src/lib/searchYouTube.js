
var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    cache: false,
    data: {
      key: options.key,
      q: options.query,
      type: 'video',
      part: 'snippet',
      maxResults: options.max},
    dataType: 'json',
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: function(data) {
      callback(data.items);
    },
    error: function(data) {
      console.log('failed');
    }
  });
};
//    timeout: 5000,
window.searchYouTube = searchYouTube;

/*
searchYouTube({ key: 'API_KEY', query: 'cats', max: 10 }, () => {});

Use jQuery to send a GET request to the search endpoint. 
Accept a callback function that is invoked with the videos array that is returned 
Options object
  query - the string to search for
  max - the maximum number of videos to get, which should default to 5
  key - an authorized YouTube Browser API key
Only GET embeddable videos

https://www.googleapis.com/youtube/v3/search

//https://developers.google.com/youtube/v3/docs/search/list#examples
// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    maxResults: variable,
    videoEmbeddable: true
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}
*/