import React from 'react';

function ItemList({ items, deleteItem }) {
  return (
    <ul className='yellow'>
      {items.map((item, index) => (
        <li className='legon' key={index}>
          {item.name} - {item.unit} - ${item.price}
          <button onClick={() => deleteItem(index)} className='jango'>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
