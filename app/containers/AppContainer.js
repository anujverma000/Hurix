import { connect } from 'react-redux'
import { setSelectedApp } from '../actions'
import SelectApp from '../components/SelectApp'


const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      dispatch(setSelectedApp(event.target.value))
    }
  }
}

const AppContainer = connect(null, mapDispatchToProps)(SelectApp)

export default AppContainer