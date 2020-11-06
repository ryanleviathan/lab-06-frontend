// import React, { Component } from 'react'
// import SingleCar from './SingleCar.js'

// export default class FilterGarage extends Component {
//     state = {
//         carArray: {},
//         filter: ""
//     }
    
//     handleChange = e => {
//         this.setState({
//             filter: e.target.value
//         });
//     }

//     fetchCars = async () => {
//         const response = await fetch.get(`https://sleepy-reef-58614.herokuapp.com/cars`)
//         this.setState({ 
//             carArray: response.body,
//         })
//     }
//     // mounting fetched data
//     componentDidMount = async () => {
//         await this.fetchCars()
//     }

//     render() {
//         const filteredCars = carArray.filter((car) => {
//             if (!this.state.filter) return true;

//             if (car.name === this.state.filter) return true;

//             return false
//         });

//         return (
//             <>
//             <select onChange={this.handleChange}>
//                 <option value="">
//                     All Makes
//                 </option>
//                 <option value="BMW">
//                     BMW
//                 </option>
//                 <option value="Ferrari">
//                     Ferrari
//                 </option>
//                 <option value="Toyota">
//                     Toyota
//                 </option>
//             </select>
//             <section>
//                 {filteredCars.map(car => {
//                     return <SingleCar
//                     name = {car.name}
//                     make = {car.make}
//                     model = {car.model}
//                     cool_factor = {car.cool_factor}
//                     img = {car.img}
//                     owner_id = {car.owner_id}
//                     owns = {car.owns}
//                     />
//                 })}
//             </section>
//             </>
//         )
//     }
// }