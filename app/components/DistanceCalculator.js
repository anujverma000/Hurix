import React, { PropTypes } from 'react'

const DistanceCalculator = (props) => (
  <div className="panel panel2">
    <h1>Distance Calculator</h1>
    <p><span className="label">Velocity</span> <input type="range" min="20" max="120" step="5" data-distance="velocity" defaultValue={props.distance.velocity} onChange={props.onDistaneChange}/></p>
    <p><span className="label">Time</span> <input type="range" min="20" max="120" step="5" data-distance="time" defaultValue={props.distance.time} onChange={props.onDistaneChange}/></p>
    <p><span className="label">Frequency</span> <input type="range" min="20" max="120" step="5" data-distance="frequency" defaultValue={props.distance.frequency} onChange={props.onDistaneChange}/></p>
  </div>
)

export default DistanceCalculator
