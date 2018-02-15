import React from 'react';

const RecipeListItem = (props) => (
  <div>
    {props.item.description}
    {props.item.url}
  </div>
)

export default RecipeListItem;
