import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './App.css';

function App() {

  //API credentials
  const APP_ID = "55af5c69";
  const APP_KEY = "4e0290577f93a977c16af5e5e5bc5ffa";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken')

    useEffect( () =>{
      getRecipes();
    }, [query]);

    //Get recipe from API
    const getRecipes = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits);
    };

    //Update the search
    const updateSearch = e =>{
        setSearch(e.target.value);
    }

    // Get new serach
    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'> 
      <h2 className='logo'>Rec!pe Box</h2>
          <input className='search-bar' type="text" value={search} onChange={updateSearch} />
          <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe =>(
        <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}  
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>

  );
}

export default App;
