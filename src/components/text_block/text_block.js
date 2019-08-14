import $ from 'jquery' // important: case sensitive.
import React, { Component } from 'react'

export default class TextBlock extends Component {
    componentDidMount() {
        $('.h1').css('color', 'red');
      }
    render() {
        return (
            <div className="h1">
                Yo
            </div>
        )
    }
}
