import React from 'react'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Pruebas en el <CounterApp />', () => {
  test('debe de mostrar <CounterApp /> correctamente', () => {
    const wrapper = shallow(<CounterApp />)
    expect(wrapper).toMatchSnapshot()
  })
  test('debe de mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(<CounterApp value={100} />)

    const counterText = wrapper.find('h2').text().trim()
    // console.log(`xxxx${counterText}xxxx`)
    expect(counterText).toBe('100')
  })
})
