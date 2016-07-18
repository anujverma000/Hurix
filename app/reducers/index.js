import { combineReducers } from 'redux'
import app from './app'
import color from './color'
import distance from './distance'

const hurixApp = combineReducers({
  app,
  color,
  distance
})

export default hurixApp