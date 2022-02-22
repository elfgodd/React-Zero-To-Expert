import React, { useState } from 'react'

const GifExpertApp = () => {
  // const categories = ['One Punch', ' Samurai X', 'Dragon Ball']
  const [categories, setcategories] = useState([
    'One Punch',
    ' Samurai X',
    'Dragon Ball',
  ])

  const handleAdd = () => {
    // Estas 2 soluciones hacen lo mismo
    // setcategories([...categories, 'HunterXHunter'])

    setcategories((cats) => [...categories, 'HunterXHunter'])
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <br />
      {categories}
      <br />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((cat) => (
          <div key={cat}>
            <li>{cat}</li>
          </div>
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
