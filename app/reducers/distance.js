const distance = (state = {velocity: '20', time: '20', frequency: '30'}, action) => {
  switch (action.distance){
    case "velocity":
      state.velocity = action.value
      break
    case "time":
      state.time = action.value
      break
    case "frequency":
      state.frequency = action.value
  }
  return Object.assign({}, state)
}

export default distance
