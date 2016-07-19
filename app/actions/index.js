import ActionTypes from '../constants/ActionTypes'

export const setSelectedApp = (selectedApp) => {
  return{
    type: ActionTypes.SELECT_APP,
    selectedApp
  }
}
export const setColor = (color, value) => {
  return{
    type: ActionTypes.SET_COLOR,
    color,
    value
  }
}

export const setDistance = (distance, value) => {
  return{
    type: ActionTypes.SET_DISTANCE,
    distance,
    value
  }
}