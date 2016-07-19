import expect from 'expect'
import appReducer from '../app/reducers/app'

describe('app reducer', () => {
  
  it('should return the initial state', () => {
    var initialState = {selectedApp : 'color'}
    expect(
      appReducer(undefined, {})
    ).toEqual(initialState)
  })

  it('should return the selectedApp state', () => {
    var finalState = {selectedApp : 'distance'}
    var actionState = {selectedApp: 'distance'}
    expect(
      appReducer(actionState, {})
    ).toEqual(finalState)
  })
})