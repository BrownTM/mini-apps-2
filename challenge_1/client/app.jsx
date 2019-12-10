import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Search from './Components/Search.jsx';
import EventsList from './Components/EventsList.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: '',
      allEvents: [],
      pageNumber: 0,
      limit: 10,
      pageCount: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  };

  componentDidMount() {
    if (this.state.searchPhrase !== '') {
      this.getData();
    }
  };

  handleChange(e) {
    this.setState({
      searchPhrase: e.target.value
    });
  };

  getData() {
    axios.get(`/events?_page=${this.state.pageNumber}&_limit=${this.state.limit}&q=${this.state.searchPhrase}`)
      .then((response) => {
        this.setState({
          allEvents: response.data,
          pageNumber: 1,
          pageCount: Math.ceil(response.headers['x-total-count'] / this.state.limit)
        })
      })
      .catch((error) => {
        console.log('error in client GET:', error);
      });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.getData();
  };

  handleNextClick(data) {
    this.setState({ pageNumber: data.selected }, () => {
      this.getData();
    });
  };

  render() {
    let paginateView = () => {
      if (this.state.allEvents.length > 0) {
        return (
          <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={this.handleNextClick}
          forceSelected={this.state.pageNumber}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
        );
      }
    }

    return (
      <div>
        <h1 id="title">Historical Events Finder</h1>
        <div>
            <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <EventsList allEvents={this.state.allEvents} />
            {paginateView()}
          </div>
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
