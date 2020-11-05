import React, { Component } from 'react'
import request from 'superagent'
import { NavLink } from 'react-router-dom';

export default class Create extends Component {

    state = {
        makes: []
    }

    componentDidMount = async () => {
        const response = await request.get('https://sleepy-reef-58614.herokuapp.com/makes');

        this.setState({ makes: response.body });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newCar = {
            name: this.state.name,
            make_id: this.state.makeId,
            model: this.state.model,
            cool_factor: this.state.cool_factor,
            img: this.state.img,
            owner_id: this.state.owner_id,
            owns: this.state.owns
        };

        await request
            .post('https://sleepy-reef-58614.herokuapp.com/cars')
            .send(newCar);
    }

    handleChange = (e) => {
        this.setState({ makeId: e.target.value });
    }

    render() {
        return (
            <>
            <div className="create">
                Add a Vehicle to your Collection!
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input onChange={e => this.setState({ name: e.target.value })} type="string"/>
                    </label>
                    <label>
                        Make 
                        <select onChange={this.handleChange}>
                            <option />
                            {
                                this.state.makes.map(make =>
                                    <option key={make.id} value={make.id}>
                                        {make.name}
                                    </option>)
                            }
                        </select>
                    </label>
                    <label>
                        Model: 
                        <input onChange={e => this.setState({ model: e.target.value })} type="string"/> 
                    </label>
                    <label>
                        Cool Factor (1-10):
                        <input onChange={e => this.setState({ cool_factor: e.target.value })} type="number"/>
                    </label>
                    <label>
                        Image url:
                        <input onChange={e => this.setState({ img: e.target.value })} type="string"/>
                    </label>
                    <label>
                        Owner id:
                        <input onChange={e => this.setState({ owner_id: 1 })} type="number"/>
                    </label>
                    <label>
                        Owns (true or false):
                        <input onChange={e => this.setState({ owns: e.target.value })} type="boolean"/>
                    </label>
                    <button>Submit</button>
                </form>
                <NavLink to="/garage">
                    <button>Return to your Garage</button>
                </NavLink>
            </div>
            </>
        )
    }
}
