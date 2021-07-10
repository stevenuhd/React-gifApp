import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Naruto"]);
      
    return (
      <>
        <h2>Gif Expert App</h2>
        <h3>Search your 10 gifs below</h3>
        <AddCategory setCategories={setCategories} />
        
        <ol>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </ol>
      </>
    );
      };







