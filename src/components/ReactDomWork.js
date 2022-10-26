import React, { Component } from 'react'
import ReactDOM from 'react-dom';
class ReactDomWork extends Component {

    render() {
        return (
            <div>
                <h1 id='nameId'>My Name is Ratul Shourov</h1>
                <button className='btn btn-success' onClick={this.updateName}>Chnage Name By ReactDOM</button>
            </div>
        )
    }

    updateName = () => {
            var container=document.getElementById('nameId');
            var element=<h1> MY NAME IS MD.RATUL UDDIN ASHRAF </h1>;
            ReactDOM.render(element,container,function(){
                console.log('====================================');
                console.log('changed');
                console.log('====================================');
            })
    }

}

export default ReactDomWork;
