import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

const RecipeList = (props) => (
  <div className="recipes">
    <h2> Veggie Storage: </h2>
    <h4>There are { props.items.length } recipes stored.</h4>
    { props.items.map((item, key) =>
      <RecipeListItem item={item}
        key={item.id}/>)}
  </div>
)

export default RecipeList;
