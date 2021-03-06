import React from "react"
import "./Animal.css"

export const Animal = ({ animal, customer, loc }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__location">Location: {loc.name}</div>
        <div className="animal__owner">Customer: {customer.name}</div>
    </section>
)