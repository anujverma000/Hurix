import React, { Component } from 'react'

const ColorChooser = (props) =>(
  <div className="panel panel2">
    <h1>Color Chooser</h1>
    <p><span className="label">Red</span> <input type="range" min="0" max="255" step="1" data-color="red" defaultValue={props.color.red} onChange={props.onColorChange}/></p>
    <p><span className="label">Green</span> <input type="range" min="0" max="255" step="1" data-color="green" defaultValue={props.color.green} onChange={props.onColorChange}/></p>
    <p><span className="label">Blue</span> <input type="range" min="0" max="255" step="1" data-color="blue" defaultValue={props.color.blue} onChange={props.onColorChange}/></p>
  </div>
)
export default ColorChooser
