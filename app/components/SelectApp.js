import React, { PropTypes } from 'react'

const SelectApp = (props) => (
  <select onChange={props.onChange}>
    <option value="color">Color Chooser</option>
    <option value="distance">Distance Calculator</option>
  </select>
)

SelectApp.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SelectApp
