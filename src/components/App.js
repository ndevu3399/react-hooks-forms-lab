import React, { useState } from 'react';
import Filter from './Filter';
import ItemForm from './ItemForm';

const App = () => {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Updates search text when user types in the filter input
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  // Add new item to the list
  const handleItemFormSubmit = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Filter items based on search text
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Filter search={searchText} onSearchChange={handleSearchChange} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
