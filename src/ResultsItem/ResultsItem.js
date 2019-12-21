import React from 'react';
import './ResultsItem.css'

export default function ResultsItem(props) {
  const data = props.data.volumeInfo
  const shortDescription = data.description.slice(0, 200) + '...';
  return (
    <div>
      <div>
        <img src={data.imageLinks.smallThumbnail} alt='Book Cover'></img>
      </div>
      <div>
        <h2>{data.title}</h2>
        <p>{data.authors.join(' ')}</p>
        <div>
          {props.data.saleInfo.listPrice && <p>{props.data.saleInfo.listPrice.amount}</p>}
          {props.data.saleInfo.listPrice && <p>{props.data.saleInfo.listPrice.currencyCode}</p>}
        </div>
        <p>{shortDescription}</p>
      </div>
    </div>
  )
}