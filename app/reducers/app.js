const app = (state = {selectedApp: 'color'}, action) => {
  return action.selectedApp? {selectedApp : action.selectedApp} : state
}

export default app
