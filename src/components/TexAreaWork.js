import React, { Component } from 'react'

class TexAreaWork extends Component {
    constructor() {
        super();
        this.state={
            textareaValue:''
        }
    }
  render() {
    return (
      <div>
        <p>TextArea :{this.state.textareaValue}</p>
        <textarea onChange={this.handlechnage} ></textarea>
      </div>
    )
  }
  handlechnage=(event)=>{
    var value=event.target.value;
    this.setState({textareaValue:value})
  }
}

export default TexAreaWork;
