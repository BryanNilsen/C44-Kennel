import React from "react"
import "./Employee.css"

export const Employee = ({employee, loc}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{loc.name}</div>
    </section>
)