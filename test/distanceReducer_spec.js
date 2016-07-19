import expect from 'expect'
import distanceReducer from '../app/reducers/distance'

describe('color reducer', () => {
  
  it('should return the initial state', () => {
    var initialState = {velocity: '20', time: '20', frequency: '30'}
    expect(
      distanceReducer(undefined, {})
    ).toEqual(initialState)
  })

  it('should return the change the distance state', () => {
    var finalState = {velocity: '20', time: '50', frequency: '100'}
    var actionState = {velocity: '20', time: '50', frequency: '100'}
    expect(
      distanceReducer(actionState, {})
    ).toEqual(finalState)
  })
})