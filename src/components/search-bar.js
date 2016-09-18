import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {term: ''};
    this.onSearchTermChanged = props.onSearchTermChanged;
  }

  render(){
    return (
      <div className="search-bar">
        <input className="form-control" placeholder="search vods..." value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        <button className="btn btn-info"
          onClick={() => this.onSearchTermChanged(this.state.term)}>Search</button>
      </div>
    );

  }

  onInputChange(term){
    this.setState({term: term});
    this.props.onSearchTermChanged(this.state.term);
  }
}

export default SearchBar;
