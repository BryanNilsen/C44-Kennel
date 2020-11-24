import React, { useContext, useEffect } from "react"
import {LocationContext} from '../location/LocationProvider'
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employee.css"

export const EmployeeList = (props) => {
    // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getLocations()
        .then(getEmployees)
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("EmployeeList: Employee state changed")
        console.log(employees)
    }, [employees])

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
                {employees.map(employee => {
                    const loc = locations.find(l => l.id === employee.locationId)

                return <Employee key={employee.id} employee={employee} loc={loc} />
                }
                )}
            </article>
        </div>
    )
}