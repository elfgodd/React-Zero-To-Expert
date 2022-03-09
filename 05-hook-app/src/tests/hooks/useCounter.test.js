import { renderHook, act } from '@testing-library/react-hooks'
import useCounter from '../../components/03-examples/useCounter'

describe('Pruebas en useCounter', () => {
  test('debe de retornar valores por defecto', () => {
    // const { result } = renderHook(() => useCounter())
    const { result } = renderHook(() => useCounter())
    console.log(result.current)

    expect(result.current.counter).toBe(10)
    expect(typeof result.current.increment).toBe('function')
    expect(typeof result.current.decrement).toBe('function')
    expect(typeof result.current.reset).toBe('function')
  })
  test('debe de tener el counter en 100', () => {
    // const { result } = renderHook(() => useCounter())
    const { result } = renderHook(() => useCounter(100))
    console.log(result.current)

    expect(result.current.counter).toBe(100)
  })
  test('debe de incrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100))
    const { increment } = result.current

    act(() => {
      increment()
    })

    const { counter } = result.current
    // expect(counter).toBe(100) // Error
    expect(counter).toBe(101)
  })
  test('debe de decrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100))
    const { decrement } = result.current

    act(() => {
      decrement()
    })

    const { counter } = result.current
    // expect(counter).toBe(100) // Error
    expect(counter).toBe(99)
  })
  test('debe de establecer el valor en 100', () => {
    const { result } = renderHook(() => useCounter(100))
    const { decrement, reset } = result.current

    act(() => {
      decrement()
      // No puedo correr 2 mutaciones, solo lo ejecuta 1 vez
      // Ahi que revisar la documentacion
      // decrement()
      reset()
    })

    const { counter } = result.current
    // expect(counter).toBe(101) // Error
    expect(counter).toBe(100)
  })
})
