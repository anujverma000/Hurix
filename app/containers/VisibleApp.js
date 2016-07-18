import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setColor, setDistance } from '../actions'
import ColorChooser from '../components/ColorChooser'
import DistanceCalculator from '../components/DistanceCalculator'

const AppList = (props) => {
  return props.app == 'color' ?
    <ColorChooser color={props.color} onColorChange={props.onColorChange} /> :
    <DistanceCalculator distance={props.distance} onDistaneChange={props.onDistaneChange}/>
}

const mapStateToProps = (state) => {
  return {
    app: state.app.selectedApp,
    color: state.color,
    distance: state.distance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onColorChange: (event) => {
      dispatch(setColor(event.target.getAttribute('data-color'), event.target.value))
    },
    onDistaneChange: (event) => {
      dispatch(setDistance(event.target.getAttribute('data-distance'), event.target.value))
    }
  }
}

const VisibleApp = connect(mapStateToProps, mapDispatchToProps)(AppList)

export default VisibleApp