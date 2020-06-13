import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }


  }
  componentDidMount() {
    $.ajax({
      url: '/repos',
      method: 'GET',  // http method
      success: data => {
        console.log('getRepos success')
        this.setState({repos: data})},
      error: err => console.log('Error' + err)
    })
  }

  getRepos() {
    $.ajax({
      url: '/repos',
      method: 'GET',  // http method
      success: data => {
        console.log('getRepos success')
        this.setState({repos: data})},
      error: err => console.log('Error' + err)
    })
  }

   //post
  search (term) {
    console.log(`${term} was searched`);  //jinyeong-park was searched
    // TODO
    $.ajax({
      url: '/repos',
      method: 'POST',  // http method
      // data: term,  // data to submit
      data: {term: term},  // data to submit
      success: (data) => (
        console.log('data is:', data)
        // this.getRepos;

      ),
      // function (data, status, xhr) {
      //     $('p').append('status: ' + status + ', data: ' + data);
      // },
      error: err => console.log('Error' + err)
    })
  };


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));