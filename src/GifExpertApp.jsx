import React from 'react'
import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    //NT: No hacerlo como un push, sino con el spread que es ...(con push muta el objeto)
    const onAddCategory=(NewCategory)=>{
        console.log(NewCategory)

        if(categories.includes(NewCategory)) return
        
        setCategories([NewCategory,...categories])
    }

  return (
  <>
    {/*Titulo */}
    <h1>GifExpertApp</h1>
    {/*Input*/}
    <AddCategory 
      // Nt: es como se mandaba antes setCategories={setCategories}
      onNewCategory={(event)=>onAddCategory(event)}

    />
    {/* Aca lo que hace es extraer la lista y descomponerla */}
    {categories.map(category =>(
      <GifGrid 
          key={category}
          category={category}/>
    )
      )}
    {/*Listado */}
  </>
)}
