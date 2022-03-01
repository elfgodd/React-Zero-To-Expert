import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {
  const categories = ['Dragon Ball', 'One Punch']

  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()
  })
  test('debe de mostrar una lista de categorias', () => {
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

    expect(wrapper).toMatchSnapshot()
    // this will send error
    // expect(wrapper.find('GifGrid').length).toBe(categories.length + 1)
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
})
