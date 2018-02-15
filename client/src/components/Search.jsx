import React from 'react'

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }

  render(){
    return (
      <div>
        Search: <input value={this.state.input}></input>
      <button >Veggify!</button>
      </div>
    );
  }
}
}
export default Search;
