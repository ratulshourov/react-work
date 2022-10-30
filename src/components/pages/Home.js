import React, { Component } from 'react'

class Home extends Component {
    render() {
        const myStyle = {
            margin:'20px'
        }
        return (
            <div>
               <h1 style={{ backgroundColor: 'red', color: 'white' }}>Home</h1> 
                <h2 style={myStyle}>This is home page</h2>
            </div>
        )
    }
}
export default Home
