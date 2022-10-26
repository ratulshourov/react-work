import React, { Component } from "react";

class Home extends Component {

    render() {
        return <div>
            <h1>{this.props.title} page</h1>
            <button onClick={this.clickHome}>Click Home Page</button>
        </div>
    }

    clickHome() {
        alert('okk');
    }
}


export default Home;