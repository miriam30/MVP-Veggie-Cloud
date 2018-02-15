import React from 'react';
import ResultListEntry from './ResultListEntry.jsx'
const ResultList = (props) => (
  <div className="ResultList">
  {props.list.map((item) => <ResultListEntry item={item} key={item.id} />)}
  </div>
)

export default ResultList;
