import React from 'react'
import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el <GifGrid />', () => {
  const category = 'Dragon Ball'

  test('debe de mostarse correctamente', () => {
    // falsiando data, falsa implementacion
    useFetchGifs.mockReturnValue({
      // El objeto que va tomar el componente
      data: [],
      loading: true,
    })

    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })
  test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier cosa',
      },
    ]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    })
    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper).toMatchSnapshot()
  })
})
