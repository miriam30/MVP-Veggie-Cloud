import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state={
      search: ''+'vegan'
    }
  }
  render(){
    return(<div>
      search: <input></input>
    <button>Search Recipe!</button>
    </div>)
  }
}

export default Search
