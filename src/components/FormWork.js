import React, { Component } from 'react'

class FormWork extends Component {
    constructor() {
        super();
        this.state={
            fullName:'',
            phone:'',
            address:''
        }
    }
    render() {
        return (
            <div>
                <div>
                    <br/>
                    <label>{this.state.fullName}</label>
                </div>
                <p>Name:{this.state.fullName}</p><br/>
                <p>Phone :{this.state.phone}</p><br/>
                <p>address:{this.state.address}</p><br/>
                <form>
                    
                    <input type="text" placeholder="EnterName" name="fullName" onChange={this.formWork}/><br/>
                    <input type="text" placeholder="phone" name="phone" onChange={this.formWork}/><br/>
                    <input type="text" placeholder="address" name="address" onChange={this.formWork}/><br/>
                    <br/>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
    formWork=(event)=>{
        var all_name=event.target.name;
        var value=event.target.value;
        this.setState({[all_name]:value})
    }
}

export default FormWork;
