import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://sleepy-reef-58614.herokuapp.com/';

export async function fetchCars() {
    try {
        const response = await request.get(`${URL}cars`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchCar(someId) {
    try {
        const response = await request.get(`${URL}cars/${someId}`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchMakes() {
    try {
        const response = await request.get(`${URL}makes/`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchMake(someId) {
    try {
        const response = await request.get(`${URL}makes/${someId}`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function createCar(newCar) {
    try {
        await request
        .put(`${URL}cars`)
        .send(newCar)

        return;
    } catch(err) {
        throw err;
    }
}

export async function updateCar(someId, newCar) {
    try {
        await request
        .put(`${URL}cars/${someId}`)
        .send(newCar)

        return;
    } catch(err) {
        throw err;
    }
}

export async function deleteCar(someId) {
    try {
        await request.delete(`${URL}cars/${someId}`)

        return;
    } catch(err) {
        throw err;
    }
}