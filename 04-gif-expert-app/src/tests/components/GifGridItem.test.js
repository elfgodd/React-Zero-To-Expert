import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem.js />', () => {
  test('debe de mostrar el componente correctamente', () => {
    let wrapper = shallow(<GifGridItem />)
    expect(wrapper).toMatchSnapshot()
  })
})
