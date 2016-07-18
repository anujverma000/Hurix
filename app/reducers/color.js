const color = (state = {red: '255', green: '255', blue: '255'}, action) => {
  switch (action.color){
    case "red":
      state.red = action.value
      break
    case "green":
      state.green = action.value
      break
    case "blue":
      state.blue = action.value
  }
  return Object.assign({}, state)
}

export default color
