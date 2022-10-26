import React, { Component } from 'react'

class FormWork extends Component {
    constructor() {
        super();
        this.state={
            fullName:''
        }
    }
    render() {
        return (
            <div>
                <div>
                    <br/>
                    <label>{this.state.fullName}</label>
                </div>
                <form>
                    <input type="text" placeholder="EnterName" onChange={this.formWork}/><br/>
                    <br/>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
    formWork=(event)=>{
        var name=event.target.value;
        this.setState({fullName:name})
    }
}

export default FormWork;
