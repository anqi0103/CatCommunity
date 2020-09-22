import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import './App.css';
import Modal from './Modal';

let ENDPOINTCat = '/cats';
let ENDPOINTMatchedCat = '/catSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchInfo: '',
    };

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

  onClickAdd() {
    let modal = document.querySelector('.MyModal');
    modal.style.display = 'block';
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
          <div className="Container">
            <button className="AddButton" onClick={this.onClickAdd}>
              <img
                className="ButtonImg"
                src="https://image.flaticon.com/icons/png/128/3135/3135512.png"
                alt="Addbutton"
              />
              <div className="Middle">
                <div className="text">Add your cat</div>
              </div>
            </button>
          </div>
          <Modal getCats={this.getCats} />
          {this.state.data.map((item) => (
            <Profile key={item._id} eachCat={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
