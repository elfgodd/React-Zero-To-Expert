import React from 'react'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Pruebas en el <CounterApp />', () => {
  // Creando el wrapper como scope para uso en los test
  // const wrapper = shallow(<CounterApp />)

  // let wrapper // undefined
  // Con esta opcion de abajo evito que no me tire las opciones dentro del wrapper.
  let wrapper = shallow(<CounterApp />)

  // beforeEach inializa el componente en cada test
  beforeEach(() => {
    wrapper = shallow(<CounterApp />)
  })

  test('debe de mostrar <CounterApp /> correctamente', () => {
    // const wrapper = shallow(<CounterApp />)
    expect(wrapper).toMatchSnapshot()
  })
  test('debe de mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(<CounterApp value={100} />)

    const counterText = wrapper.find('h2').text().trim()
    // console.log(`xxxx${counterText}xxxx`)
    expect(counterText).toBe('100')
  })
  test('debe de incrementar con el boton +1', () => {
    // const btn1 = wrapper.find('button').at(0).simulate('click')

    wrapper.find('button').at(0).simulate('click')
    const counterText = wrapper.find('h2').text().trim()

    expect(counterText).toBe('11')

    // const btn1 = wrapper.find('button').at(0)
    // console.log(btn1) //  ShallowWrapper {}
    // console.log(btn1.html()) // <button>+1</button>
  })
  test('debe de decrementar con el boton -1', () => {
    // const btn3 = wrapper.find('button').at(2).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    // console.log(btn3.html()) // <button>+1</button>

    const counterText = wrapper.find('h2').text().trim()

    expect(counterText).toBe('9')
  })
  test('debe de colocar el valor por defecto con el btn reset', () => {
    const wrapper = shallow(<CounterApp value={105} />)

    wrapper.find('button').at(0).simulate('click') // 106
    wrapper.find('button').at(0).simulate('click') // 107
    wrapper.find('button').at(1).simulate('click')
    const counterText = wrapper.find('h2').text().trim()

    console.log(counterText)
    expect(counterText).toBe('105')
  })
})
