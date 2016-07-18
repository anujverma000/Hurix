export const setSelectedApp = (selectedApp) => {
  return{
    type: 'SELECT_APP',
    selectedApp
  }
}
export const setColor = (color, value) => {
  return{
    type: 'COLOR',
    color,
    value
  }
}

export const setDistance = (distance, value) => {
  return{
    type: 'DISTANCE',
    distance,
    value
  }
}