import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSeach from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
const API_KEY = 'AIzaSyDyYxfwIa7SiXNc0Hwa7pIAEdTq2jVO0jQ';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('');
  }

    render(){
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
      return (
        <div>
          <h1 className="title">Youtube Feeder</h1>
          <SearchBar onSearchTermChanged={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>);
    }

  videoSearch(term){
    YTSeach({key:API_KEY, term: term}, (videos) =>  {
      console.dir(videos);
      console.dir(this);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
}

// Take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
