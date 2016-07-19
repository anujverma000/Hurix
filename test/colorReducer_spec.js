import expect from 'expect'
import colorReducer from '../app/reducers/color'

describe('color reducer', () => {
  
  it('should return the initial state', () => {
    var initialState = {red: '255', green: '255', blue: '255'}
    expect(
      colorReducer(undefined, {})
    ).toEqual(initialState)
  })

  it('should return the change the color state', () => {
    var finalState = {red: '10', green: '10', blue: '10'}
    var actionState = {red: '10', green: '10', blue: '10'}
    expect(
      colorReducer(actionState, {})
    ).toEqual(finalState)
  })
})