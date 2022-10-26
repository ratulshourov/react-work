import React from "react";

function clickAbout() {
    alert('okk');
}
function About(props) {
    return (
        <div>
            <h1>{props.title}  page</h1>
            <button onClick={clickAbout}>Click About Page</button>
        </div>
    )
}

export default About;