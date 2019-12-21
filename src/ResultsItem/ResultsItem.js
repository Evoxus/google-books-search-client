import React from 'react';
import './ResultsItem.css'

export default function ResultsItem(props) {
  const data = props.data.volumeInfo
  const shortDescription = data.description ? data.description.slice(0, 200) + '...' : 'This item is missing a description';
  return (
    <div>
      <h2>{data.title}</h2>
      <div>
        <img src={data.imageLinks.smallThumbnail} alt='Book Cover'></img>
      </div>
      <div>
        {data.authors && <p>{data.authors.join(' ')}</p>}
        <div>
          {props.data.saleInfo.listPrice && <span>{props.data.saleInfo.listPrice.amount} </span>}
          {props.data.saleInfo.listPrice && <span> {props.data.saleInfo.listPrice.currencyCode}</span>}
        </div>
        <p>{shortDescription}</p>
      </div>
    </div>
  )
}