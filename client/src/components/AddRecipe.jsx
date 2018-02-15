import React from 'react';

class AddRecipe extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      url:'',
      description:''
    }
  }

  render(){
    return (<div>
      url: <input></input>
    <br />
    Description: <input></input>
  <button>Add Recipe</button>
    </div>)
  }
}

export default AddRecipe
