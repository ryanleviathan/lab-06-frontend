import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { fetchCars } from './Fetch.js'
// import FilterGarage from './FilterGarage.js'

export default class Garage extends Component {
    state = {
        cars: []
    }
    // fetching from API and mounting fetched data
    componentDidMount = async () => {
        const cars = await fetchCars()

        this.setState({ cars })
    }

    render() {

        const { cars } = this.state

        return (
            <>
            <h2>
                See your Collection!
            </h2>
            <NavLink to="/add">
                <button>Add a vehicle</button>
            </NavLink>
            {/* <div>
                <FilterGarage />
            </div> */}
            <div>
                {
                cars.length < 0
                ? <img src={`https://media3.giphy.com/media/3ohs7K8l2xVqyHwfGE/source.gif`} alt="Loading" />
                : cars.map(car =>    
                    <NavLink to={`detail/${car.id}`}>
                        <div> 
                            <h3>Name: {car.name}</h3>
                            <img src={car.img} alt={car.name} />
                            <p>Make: {car.make}</p>
                            <p>Model: {car.model}</p>
                            <p>Cool factor: {car.cool_factor}</p>
                            <p>Owns: {String(car.owns)}</p>
                        </div>
                    </NavLink>
                    )
                }
            </div>
            </>
        )
    }
}