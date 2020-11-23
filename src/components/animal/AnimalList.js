import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("AnimalList: Animal state changed")
        console.log(animals)
    }, [animals])

    return (
        <div className="animals">
        {
            animals.map(animal => <Animal key={animal.id} animal={animal} />)
        }
        </div>
    )
}