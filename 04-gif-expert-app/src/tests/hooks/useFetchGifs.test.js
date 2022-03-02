import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', () => {
    // const resp = renderHook(() => useFetchGifs('Dragon Ball'))
    // console.log(resp)
    const { result } = renderHook(() => useFetchGifs('Dragon Ball'))
    const { data, loading } = result.current
    // const { data, loading } = useFetchGifs('Dragon Ball')
    console.log(data, loading)
    expect(data).toEqual([])
    expect(loading).toBe(true)
  })
})
