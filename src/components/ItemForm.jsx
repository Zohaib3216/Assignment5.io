import React, { useState } from 'react';

function ItemForm({ addItem }) {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && unit && price) {
      addItem({ name, unit, price });
      setName('');
      setUnit('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className='hi'/>
      <input type="text" placeholder="Unit" value={unit} onChange={(e) => setUnit(e.target.value)} className='hi' />
      <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className='hi' />
      <button type="submit"className='btn'>Add Item</button>
    </form>
  );
}

export default ItemForm;
