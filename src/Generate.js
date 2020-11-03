import React, { Component } from 'react'
import fetch from 'superagent'

export default class Generate extends Component {
    state = {
        carArray: []
    }
    // fetching from API
    fetchCars = async () => {
        const response = await fetch.get(`https://sleepy-reef-58614.herokuapp.com/cars`)
        this.setState({ 
            carArray: response.body,
        })
    }
    // mounting fetched data
    componentDidMount = async () => {
        await this.fetchCars()
    }

    render() {
        return (
            <>
            <div>
                {
                this.state.carArray.length === 0
                ? <img src={`https://media3.giphy.com/media/3ohs7K8l2xVqyHwfGE/source.gif`} alt="Loading" />
                : this.state.carArray.map(car =>    
                        <div> 
                            <h3>Name: {car.name}</h3>
                            <img src={car.img} alt={car.name} />
                            <p>Make: {car.make}</p>
                            <p>Model: {car.model}</p>
                            <p>Cool factor: {car.cool_factor}</p>
                        </div>
                    )
                }
            </div>
            </>
        )
    }
}