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

        const makeNameAsString = car.name

        const matchingMake = makes.find((make) => {
            return make.name === makeNameAsString
        })

        this.setState({ 
            name: car.name,
            makes: makes,
            makeId: matchingMake,
            model: car.model,
            cool_factor: car.cool_factor,
            img: car.img,
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
        deleteCar()
    }

    render() {
        return (
            <>
            <div className='create'>
                Update a Vehicle in your Collection!
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input onChange={e => this.setState({ name: e.target.value })} type='string'/>
                    </label>
                    <label>
                        Make 
                        <select onChange={this.handleChange}>
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
                        <input onChange={e => this.setState({ model: e.target.value })} type='string'/> 
                    </label>
                    <label>
                        Cool Factor (1-10):
                        <input onChange={e => this.setState({ cool_factor: e.target.value })} type='number'/>
                    </label>
                    <label>
                        Image url:
                        <input onChange={e => this.setState({ img: e.target.value })} type='string'/>
                    </label>
                    <label>
                        Owner id:
                        <input onChange={e => this.setState({ owner_id: 1 })} type='number'/>
                    </label>
                    <label>
                        Owns (true or false):
                        <input onChange={e => this.setState({ owns: e.target.value })} type='boolean'/>
                    </label>
                    <NavLink to='/garage'>
                    <button onSubmit={this.handleSubmit}>Submit</button>
                    </NavLink>
                </form>
            </div>
            </>
        )
    }
}
