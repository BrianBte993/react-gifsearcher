import { useState, useEffect } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategory = (newCategory) => {
    //validar que no se repitan categorias
    if (categories.includes(newCategory)) {
      return;
    }

    setCategories([newCategory, ...categories]);
    //ó
    /*  setCategories( cat => [ ...cat, newCategory]) */
  }

  return (
    <>
      {/* titulo */}
      <h1>GifSearcherApp</h1>

      {/* Input */}
      <AddCategory
        /*             setCategories= { setCategories }
                    categories = { categories } */
        onNewCategory={e => onAddCategory(e)}
      />

      {/* Listado de Gifs */}


      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }

      {/* Gif Item */}
    </>
  )
}
