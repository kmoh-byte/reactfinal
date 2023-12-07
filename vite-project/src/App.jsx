import React, { useState } from 'react';
import './app.css';

const foods = [
  {
    id: 0,
    name: 'Sushi',
    description: 'Sushi is a traditional Japanese dish.'
  },
  {
    id: 1,
    name: 'Dal',
    description: 'Dal contains onions, tomatoes and various spices which may be added'
  },
  {
    id: 2,
    name: 'Pierogi',
    description: 'Pierogi involve wrapping dough around a savoury or sweet filling'
  },
  {
    id: 3,
    name: 'Kebab',
    description: 'Kebab is a popular meal of skewered meat.'
  },
  {
    id: 4,
    name: 'Dim sum',
    description: 'Dim sum is a variety of smaller dishes that can be enjoyed both during lunch or dinner'
  }
];

const FoodList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.input}
      />

      <ul style={styles.list}>
        {filteredFoods.map((food) => (
          <li key={food.id} style={styles.listItem}>
            <strong style={styles.foodName}>{highlightMatches(food.name, searchTerm)}</strong>: {highlightMatches(food.description, searchTerm)}
          </li>
        ))}
      </ul>
    </div>
  );
};


// function to highlight matches in text
const highlightMatches = (text, searchTerm) => {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.split(regex).map((part, index) =>
    regex.test(part) ? <mark key={index}>{part}</mark> : part
  );
};
export default FoodList;
