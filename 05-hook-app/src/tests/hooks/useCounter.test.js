import { renderHook } from '@testing-library/react-hooks'
import useCounter from '../../components/03-examples/useCounter'

describe('Pruebas en useCounter', () => {
  test('debe de retornar valores por defecto', () => {
    const { result } = renderHook(() => useCounter())
    console.log(result.current)

    expect(result.current.counter).toBe(10)
    expect(typeof result.current.increment).toBe('function')
    expect(typeof result.current.decrement).toBe('function')
    expect(typeof result.current.reset).toBe('function')
  })
})
