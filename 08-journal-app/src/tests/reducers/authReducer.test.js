import { authReducer } from '../../reducers/authReducer'
import { types } from '../../types/types'

describe('Pruebas en auth Reducer', () => {
  test('debe de realizar el login', () => {
    const initState = {}

    const action = {
      type: types.login,
      payload: {
        uid: 'abc',
        displayName: 'ElfGod',
      },
    }
    const state = authReducer(initState, action)

    expect(state).toEqual({
      uid: 'abc',
      name: 'ElfGod',
    })
  })

  test('debe de hacer el logout', () => {
    const initState = {}

    const action = {
      type: types.logout,
    }
    const state = authReducer(initState, action)

    expect(state).toEqual({})
  })

  test('no debe de hacer cambios en el state', () => {
    const initState = {}

    const action = {
      type: types.logout,
    }
    const state = authReducer(initState, action)

    expect(state).toEqual(initState)
  })
})
