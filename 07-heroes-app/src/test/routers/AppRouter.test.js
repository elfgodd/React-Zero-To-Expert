import { AppRouter } from '../../routers/AppRouter'
import { mount } from 'enzyme'
import { AuthContext } from '../../auth/authContext'

describe('Pruebas en <AppRouter />', () => {
  const contextValue = {
    user: { logged: false },
  }

  test('debe de mostrar el login sino esta autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )
    console.log(wrapper.html())
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h1').text().trim()).toBe('Login')
  })
})
