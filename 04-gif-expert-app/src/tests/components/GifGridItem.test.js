import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem.js />', () => {
  const title = 'Un titulo'
  const url = 'https://localhost/algo.jpg'
  let wrapper = shallow(<GifGridItem title={title} url={url} />)
  test('debe de mostrar el componente correctamente', () => {
    // let wrapper = shallow(<GifGridItem title={title} url={url} />)
    expect(wrapper).toMatchSnapshot()
  })
  test('debe de tener un parrafo con el titulo', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  })
  test('debe de tener la imagen igual al url y al alt de los props', () => {
    // Si tuvieramos varias imagenes tendriamos que identificarlas
    // con la clase o el id o el .at
    const img = wrapper.find('img')
    // console.log(img) // ShallowWrapper {}
    // console.log(img.html()) // <img src="https://localhost/algo.jpg" alt="Un titulo"/>
    // Enzyme ofrece ciertas caracteristicas para analyzar atributos en react properties
    // console.log(img.props()) // Este codigo me enviara el objeto con las propiedades
    console.log(img.props().src)
    console.log(img.props().alt)
    console.log(img.prop('src'))
    console.log(img.prop('alt'))
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })
  test('debe de tener animate__flip', () => {
    const div = wrapper.find('div')
    // animate__flip
    // This code brings all the props inside this div
    // console.log(div.props())
    // console.log(div.prop('className')) // card animate__animated animate__flip
    const className = div.prop('className')

    // expect(className.includes('animate__flip')).toBe(true)
    expect(className.includes('animate__flip')).not.toBe(false)
  })
})
