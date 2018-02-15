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
  }
  addRecipe(){
    
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
      <h1>Recipe List</h1>
      <Search />
      <AddRecipe />
      <RecipeList items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
