import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

describe('Pruebas en <HeroScreen />', () => {
  test('no debe de mostrar el HeroScreen si no hay un heroe en el URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <Routes>
          <Route path='/hero' element={<HeroScreen />} />
          <Route path='/' element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    )

    console.log(wrapper.html())
    expect(wrapper.find('h1').text().trim()).toBe('No Hero Page')
  })
  test('debe de mostrar un hero si el parametro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path='/hero/:heroeId' element={<HeroScreen />} />
          <Route path='/' element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    )

    console.log(wrapper.html())
    expect(wrapper.find('.row').exists()).toBe(true)
  })
})
