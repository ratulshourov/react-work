import React from "react";

function clickAbout(argument) {
    alert(argument);
}
function About(props) {
    return (
        <div>
            <h1>{props.title}  page</h1>
            <button onClick={clickAbout.bind(this,"I am the argument value")}>Click About Page</button>
        </div>
    )
}

export default About;