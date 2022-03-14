import React from 'react'
import { mount } from 'enzyme'
import HomeScreen from '../../../components/09-useContext/HomeScreen'
import { UserContext } from '../../../components/09-useContext/UseContext'
describe('Pruebas  en <HomeScreen />', () => {
  const user = {
    name: 'ElfGod',
    email: 'elfgod@gmail.com',
  }

  const wrapper = mount(
    <UserContext.Provider
      value={{
        // user: user
        user,
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  )

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
