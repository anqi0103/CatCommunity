import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import './App.css';

let ENDPOINTCat = '/cats';
let ENDPOINTMatchedCat = '/catSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchInfo: '',
    };
    // bind method here
    this.handleChange = this.handleChange.bind(this);
    this.onClickSearch = this.onClickSearch.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchInfo: e.target.value,
    });
  }

  onClickSearch() {
    axios
      .get(ENDPOINTMatchedCat + `/?searchInfo=${this.state.searchInfo}`)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch(console.log);
  }

  getCats() {
    axios
      .get(ENDPOINTCat)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.getCats();
  }

  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">Cat Community</header>
          <div className="App-search-button">
            <input
              type="text"
              className="SearchBar"
              onChange={this.handleChange}
              placeholder="search cat..."
            />
            <button className="SearchButton" onClick={this.onClickSearch}>
              Go Cat !
            </button>
          </div>
        </div>
        <div className="ProfilePicture">
          {this.state.data.map((item) => (
            <Profile key={item._id} eachCat={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
