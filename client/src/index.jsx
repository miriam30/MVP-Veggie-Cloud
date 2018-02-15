import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Resultlist from './components/ResultList.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      results: window.data
    }
  }
  componentDidMount() {
    $.ajax({
      url: '/',
      success: (data) => {
        this.setState({
          results: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render(){
    return (<div>
      <h1>Result List:</h1>
      <Search />
      <ResultList results={this.state.results}/>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
