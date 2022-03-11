import React from 'react'
import { shallow } from 'enzyme'
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks'
import useFetch from '../../../hooks/useFetch'
// import useCounter from '../../../components/03-examples/useCounter'
import useCounter from '../../../components/03-examples/useCounter'

jest.mock('../../../hooks/useFetch')
jest.mock('../../components/03-examples/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {
  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {},
  })

  test('debe de mostrarse correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    })

    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper).toMatchSnapshot()
  })
  test('debe de mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: ' ElfGod',
          quote: 'Elf Leader',
        },
      ],
      loading: false,
      error: null,
    })
    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper.find('.alert').exists()).toBe(false)
    expect(wrapper.find('.mb-3').text().trim()).toBe('Elf Leader')
    expect(wrapper.find('footer').text().trim()).toBe('ElfGod')
    console.log(wrapper.html())
  })
})
