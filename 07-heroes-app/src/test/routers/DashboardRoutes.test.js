import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { DashboardRoutes } from '../../routers/DashboardRoutes'

describe('Pruebas en <DashboardRoutes />', () => {
  const contextValue = {
    user: { logged: true, name: 'ElfGod' },
  }

  test('debe de mostrarse correctamente', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    console.log(wrapper.html())
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.text-info').text().trim()).toBe('ElfGod')
  })
})
