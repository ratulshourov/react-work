import React, { Component } from 'react'

class JsonArrayListWork extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        const student = [
            {
                name: "Ratul",
                roll: "IT11010"
            },

            {
                name: "Aujoy",
                roll: "IT11029"
            }
        ];
        const studentList = student.map((data) => {
            return <option>{data.name}</option>;
        });
        const rollList = student.map((data) => {
            return <option>{data.roll}</option>;
        })
        return (
            <div>
                <h1>Student Dropdown</h1>
                <select>
                    {studentList}
                </select>

                <h1>Roll Dropdown</h1>
                <select>
                    {rollList}
                </select>
            </div>
        )
    }

}

export default JsonArrayListWork;
