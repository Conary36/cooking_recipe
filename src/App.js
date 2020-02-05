import React from 'react';
import './App.css';
import RecipeList from '../src/components/RecipeList'


function App() {
  return (
   <RecipeList recipes={sampleRecipes}/>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on Chicken\n2. Put Chicken in Oven\n3. Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '2 Tablespoon'
      }
    ]

  },
  {
    id: 2,
    name: 'Pork',
    servings: 5,
    cookTime: '1:30',
    instructions: "1. Put salt on Pork\n2. Put Pork in Oven\n3. Eat Pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '1 Tablespoon'
      }
    ]
  }
]

export default App;
