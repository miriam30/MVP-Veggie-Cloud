import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx'
import AddRecipe from './components/AddRecipe.jsx';
import RecipeList from './components/RecipeList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.addRecipe = this.addRecipe.bind(this);
    this.getRecipeList = this.getRecipeList.bind(this);
  }

  addRecipe(url, name){
    $.ajax({
      method:'POST',
      url:'/recipelist',
      contentType:'application/json',
      data:JSON.stringify({
        url: url,
        name: name
      })
    }).done(() => {
      this.getRecipeList();
    });
  }

  getRecipeList() {
    $.ajax({
      url: '/recipelist',
      method:'GET',
      success: (results) => {
        this.setState({
          items: results
        })
      },
      error: ( err) => {
        console.log('err', err);
      }
    });
  }
  componentDidMount(){
    this.getRecipeList();
  }

  render () {
    return (<div>
      <h1>The Veggie Cloud!</h1>
      <h3>Add a Recipe:</h3>
      <AddRecipe addRecipe={this.addRecipe}/>
      <RecipeList items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
