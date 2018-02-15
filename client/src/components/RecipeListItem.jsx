import React from 'react';

const RecipeListItem = (props) => (
  <div>
    <a href={`https://${props.item.url}`}>{props.item.name}</a>
  </div>
)

export default RecipeListItem;
