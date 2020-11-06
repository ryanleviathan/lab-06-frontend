import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { 
    fetchMakes, 
    updateCar, 
    fetchCar,
    deleteCar
 } from './Fetch.js';

export default class Detail extends Component {

    state = {
        name: '',
        makes: [],
        makeId: 1,
        model: '',
        cool_factor: 0,
        img: '',
        owner_id: 1,
        owns: ''
    }

    componentDidMount = async () => {
        const makes = await fetchMakes();
        const car = await fetchCar(this.props.match.params.id);
        console.log(car);

        const makeAsString = car.make

        const matchingMake = makes.find((make) => {
            return make.name === makeAsString
        })

        this.setState({ 
            name: car.name,
            makes: makes,
            makeId: matchingMake,
            model: car.model,
            cool_factor: car.cool_factor,
            img: car.img,
            owner_id: 1,
            owns: car.owns
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await updateCar(
            this.props.match.params.id,
            {
                name: this.state.name,
                make_id: this.state.makeId,
                model: this.state.model,
                cool_factor: this.state.cool_factor,
                img: this.state.img,
                owner_id: this.state.owner_id,
                owns: this.state.owns
            });

            this.props.history.push('/garage');
    }

    handleChange = (e) => {
        this.setState({ makeId: e.target.value });
    }

    handleDelete = (e) => {
        deleteCar(this.props.match.params.id)
    }

    render() {
        return (
            <>
            <div className='create'>
                Update a Vehicle in your Collection!
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} type='string'/>
                    </label>
                    <label>
                        Make 
                        <select value={this.state.makeId} onChange={this.handleChange}>
                            <option />
                            {
                                this.state.makes.map(make =>
                                    <option 
                                    selected={this.state.makeId === make.id} 
                                    key={make.id} 
                                    value={make.id}>
                                        {make.name}
                                    </option>)
                            }
                        </select>
                    </label>
                    <label>
                        Model: 
                        <input  value={this.state.model} onChange={e => this.setState({ model: e.target.value })} type='string'/> 
                    </label>
                    <label>
                        Cool Factor (1-10):
                        <input value={this.state.cool_factor} onChange={e => this.setState({ cool_factor: e.target.value })} type='number'/>
                    </label>
                    <label>
                        Image url:
                        <input value={this.state.img} onChange={e => this.setState({ img: e.target.value })} type='string'/>
                    </label>
                    <label>
                        Owns (true or false):
                        <input value={this.state.owns} onChange={e => this.setState({ owns: e.target.value })} type='boolean'/>
                    </label>
                    <button>Submit</button>
                </form>
                <button onClick={this.handleDelete}>Delete Vehicle</button>
                <NavLink to='/garage'>
                    <button>Back to Garage</button>
                </NavLink>
            </div>
            </>
        )
    }
}
