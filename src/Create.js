import React, { Component } from 'react'

export default class Create extends Component {
    render() {
        return (
            <div>
                Add a vehicle to your garage!
                <form>
                    <label>
                        Name: 
                        <input />
                    </label>
                    <label>
                        Make: 
                        <select>
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
                        <input /> 
                    </label>
                    <label>
                        Cool Factor (1-10):
                        <input />
                    </label>
                    <label>
                        Image url:
                        <input />
                    </label>
                    <label>
                        Owns (true or false):
                        <input />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
