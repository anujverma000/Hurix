import React from 'react'
import { connect } from 'react-redux'

const ResultContainer = (props) =>{
  let u = props.distance.velocity
  let t = props.distance.time
  let f = props.distance.frequency
  return(
    <div className="panel panel3" style={{backgroundColor: 'rgb('+props.color.red+','+ props.color.green+','+ props.color.blue+')'}}>
      distance = {(u*t)  + (0.5*f*t*t)}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    app: state.app.selectedApp,
    color: state.color,
    distance: state.distance
  }
}
const Result = connect(mapStateToProps)(ResultContainer)

export default Result
