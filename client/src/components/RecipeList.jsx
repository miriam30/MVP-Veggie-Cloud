import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

const RecipeList = (props) => (
  <div>
    <h4> Recipes </h4>
    There are { props.items.length } recipes stored.
    { props.items.map(item => <RecipeListItem item={item}/>)}
  </div>
)

export default RecipeList;
