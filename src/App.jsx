import React, { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('inventoryItems')) || [];
    setItems(storedItems);
  }, []);

  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem('inventoryItems', JSON.stringify(items));
  };

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
    saveItemsToLocalStorage(newItems);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    saveItemsToLocalStorage(newItems);
  };

  return (
    <div>
      <h1 className='hello'>Inventory Management Project</h1>
      <ItemForm addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
