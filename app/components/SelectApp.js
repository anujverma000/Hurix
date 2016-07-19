import React, { PropTypes } from 'react'

const SelectApp = (props) => (
  <div className="panel panel1">
    <h1>Select an App</h1>
    <select onChange={props.onChange}>
      <option value="color">Color Chooser</option>
      <option value="distance">Distance Calculator</option>
    </select>
  </div>
)

SelectApp.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SelectApp
