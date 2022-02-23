import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  // const categories = ['One Punch', ' Samurai X', 'Dragon Ball']
  const [categories, setcategories] = useState(['Dragon Ball'])

  // const handleAdd = () => {
  //   // Estas 2 soluciones hacen lo mismo
  //   // setcategories([...categories, 'HunterXHunter'])

  //   setcategories((cats) => [...categories, 'HunterXHunter'])
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />

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
