import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Home extends Component {

    render() {
        return <div>
            <h1>{this.props.title} page</h1>
            <button className="btn btn-primary" onClick={this.clickHome.bind(this,"I am the argument value")}>Click Home Page</button>
        </div>
    }

    clickHome(argument) {
        alert(argument);
    }
}


export default Home;