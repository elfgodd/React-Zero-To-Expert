import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({ defaultCategories = [] }) => {
  // const categories = ['One Punch', ' Samurai X', 'Dragon Ball']
  // const [categories, setCategories] = useState(['Dragon Ball'])
  const [categories, setCategories] = useState(defaultCategories)

  // const handleAdd = () => {
  //   // Estas 2 soluciones hacen lo mismo
  //   // setCategories([...categories, 'HunterXHunter'])

  //   setCategories((cats) => [...categories, 'HunterXHunter'])
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />

      <hr />
      <br />
      {categories}
      <br />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
        {/* {categories.map((category) => (
          <li key={category}>{category}</li>
        ))} */}
      </ol>
    </>
  )
}

export default GifExpertApp
