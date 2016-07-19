import expect from 'expect'
import * as actions from '../app/actions'
import ActionTypes from '../app/constants/ActionTypes'

describe('app chooser action', () => {
  it('should select the color chooser app', () => {
    const selectedApp = 'color'
    const expectedAction = {
      type: ActionTypes.SELECT_APP,
      selectedApp
    }
    expect(actions.setSelectedApp('color')).toEqual(expectedAction)
  })
})



describe('set color action', () => {
  it('should set the red color value to 200 from color chooser', () => {
    const color = 'red'
    const value = '200'
    const expectedAction = {
      type: ActionTypes.SET_COLOR,
      color,
      value
    }
    expect(actions.setColor('red', '200')).toEqual(expectedAction)
  })
})


describe('set distance action', () => {
  it('should set the velocity value to 50 from distance calculator', () => {
    const distance = 'velocity'
    const value = '50'
    const expectedAction = {
      type: ActionTypes.SET_DISTANCE,
      distance,
      value
    }
    expect(actions.setDistance('velocity', '50')).toEqual(expectedAction)
  })
})