import React from 'react';
import './FilterBar.css';

export default function FilterBar(props) {
  return (
      <div>
        <label htmlFor='printTypeSelect'>Print Type: </label>
        <select name='printType' id='printTypeSelect'>
          <option value='all'>--Please choose an option--</option>
          <option value='all'>All</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>
        <label htmlFor='bookTypeSelect'>Book Type: </label>
        <select name='bookType' id='bookTypeSelect'>
          <option value='ebooks'>--Please choose an option--</option>
          <option value='ebooks'>All</option>
          <option value='free-ebooks'>Free eBooks</option>
          <option value='paid-ebooks'>Paid eBooks</option>
        </select>
      </div>
  )
}
