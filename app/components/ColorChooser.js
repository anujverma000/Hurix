import React, { Component } from 'react'

const ColorChooser = (props) =>(
  <div>
    <h1>Color Chooser</h1>
    <p>Red <input type="range" min="0" max="255" step="1" data-color="red" defaultValue={props.color.red} onChange={props.onColorChange}/></p>
    <p>Green <input type="range" min="0" max="255" step="1" data-color="green" defaultValue={props.color.green} onChange={props.onColorChange}/></p>
    <p>Blue <input type="range" min="0" max="255" step="1" data-color="blue" defaultValue={props.color.blue} onChange={props.onColorChange}/></p>
  </div>
)
export default ColorChooser
