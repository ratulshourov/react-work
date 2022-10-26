import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Home extends Component {
    constructor() {
        super();
        this.state={
            name:'Md.Ratul Uddin Ashraf',
            skill:['laravel','ajax'],
            project:{
                'laravel':'JRFUMARt'
            }
        }
    }
    render() {
        return <div>
            <h1>{this.props.title} page</h1>
            <h1>Name:{this.state.name}</h1>
            <h1>Skill:{this.state.skill[1]}</h1>
            <h1>project:{this.state.project.laravel}</h1>
            <button className="btn btn-primary" onClick={this.clickHome.bind(this,"I am the argument value")}>Click Home Page</button>
            <button className="btn btn-warning" onClick={this.changeName.bind(this,"Ratul Shourov")}>Update Name</button>
        </div>
    }

    clickHome(argument) {
        alert(argument);
    }
    //ES6
    changeName=(updateName)=>{
        this.setState({name:updateName})
    }
}


export default Home;