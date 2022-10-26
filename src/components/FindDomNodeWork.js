import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class FindDomNodeWork extends Component {
    render() {
        return (
            <div>
                <div>
                    <img id='image' src='https://picsum.photos/seed/picsum/200/300' />
                </div>
                <button onClick={this.changeImage}>Change Image</button>
            </div>
        )
    }
    changeImage = () => {
        var imageId=document.getElementById('image');
        ReactDOM.findDOMNode(imageId).src='https://picsum.photos/200/300/?blur'
    }
}
export default FindDomNodeWork;