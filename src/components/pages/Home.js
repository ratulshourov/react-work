import React, { Component } from 'react'
import style from '../../Home.module.css'
import '../../my.scss'
class Home extends Component {
    render() {
        const myStyle = {
            margin:'20px'
        }
        return (
            <div>
               <h1 style={{ backgroundColor: 'red', color: 'white' }}>Home</h1> 
                <h2 style={myStyle}>This is home page</h2>
                <h3 className={style.TextStyleWork}>This is Moduled css</h3>
                <h3 className='styleWork'>This is  from scss</h3>
            </div>
        )
    }
}
export default Home
