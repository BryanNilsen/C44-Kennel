import React from "react"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { EmployeeProvider} from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerProvider} from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { AnimalProvider} from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"

import "./Kennel.css"
import { Animal } from "./animal/Animal"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <h2>Locations</h2>
        <CustomerProvider>
        <EmployeeProvider>
        <LocationProvider>
        <AnimalProvider>
            <LocationList />
            <EmployeeList />
            <CustomerList/>
            <AnimalList />
        </AnimalProvider>
        </LocationProvider>
        </EmployeeProvider>
        </CustomerProvider>
    </>
)