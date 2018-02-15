import React from 'react';

class AddRecipe extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      url:'',
      name:''
    }
    this.updateUrl=this.updateUrl.bind(this);
    this.updateName=this.updateName.bind(this);
    this.add=this.add.bind(this);
  }
  updateUrl(event){
    this.setState({
      url: event.target.value
    })
  }
  updateName(event){
    this.setState({
      name: event.target.value
    })
  }
  add(){
    this.props.addRecipe(this.state.url, this.state.name);
    this.setState({
      url:'',
      name:''
    })
  }

  render(){
    return (<div>
      url: <input onChange={this.updateUrl} value={this.state.url}></input>
    <br />
    Name: <input onChange={this.updateName} value={this.state.name}></input>
  <button onClick={this.add}>Add Recipe</button>
    </div>)
  }
}

export default AddRecipe
