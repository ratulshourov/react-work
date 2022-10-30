import React, { Component } from 'react'

class TexAreaWork extends Component {
    constructor() {
        super();
        this.state={
            textareaValue:'',
            city1:'BD',
            city2:'AUS',
            selectedCity:''

        }
    }
  render() {
    const country=['BD','AUS'];
    const list=country.map((data)=>{
        return <h1>{data}</h1>;
    })
    return (
      <div>
        <p>TextArea :{this.state.textareaValue}</p>
        <textarea onChange={this.handlechnage} ></textarea><br/>
        <p>{this.state.selectedCity}</p>

        <select onChange={this.dropdownWork} value={this.state.selectedCity}>
            <option>{this.state.city1}</option>
            <option>{this.state.city2}</option>
        </select>

        <br/>
        <ul>
            {list}
        </ul>

    

      </div>
    )
  }
  handlechnage=(event)=>{
    var value=event.target.value;
    this.setState({textareaValue:value})
  }
  
  dropdownWork=(event) =>{
    var value=event.target.value;
    this.setState({selectedCity:value})
  }
}

export default TexAreaWork;
