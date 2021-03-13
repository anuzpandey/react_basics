import { MOVIE_DATA, MOVIES_LIST } from "../types";

export const moviesList = () => {
    return {
        type: MOVIES_LIST,
        payload: [
            {id: 1, name: 'Pulp Fiction'},
            {id: 2, name: 'Pacific Rim'},
            {id: 3, name: 'Rambo'},
        ]
    }
}

export const movieData = () => {
    return {
        type: MOVIE_DATA,
        payload: {
            id: 1,
            name: 'Pulp Fiction',
            actors : [
                'Travolta',
                'Thurman'
            ],
            year: 1990,
            director: 'Tarantino'
        }
    }
}