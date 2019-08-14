import $ from 'jquery' // important: case sensitive.
import React, { Component } from 'react'

export default class TextBlock extends Component {
    componentDidMount() {
        $('.h1').css('color', 'red');
      }
    render() {
        return (
          <div className="text-block">
            <div className="text-block__inner">
                <div className="text-block__inner-heading">
                  <h1>О платформе</h1>  
                  <h1>OldSchool</h1>  
                </div>
                <div className="text-block__inner-description">
                  <p>
                  Minim eu pariatur sit ipsum reprehenderit sit sunt culpa duis ut. Irure nisi id ullamco labore quis elit amet duis ea enim adipisicing deserunt velit. Labore incididunt enim tempor mollit.</p>  
                </div>
            </div>
          </div>  
        )
    }
}