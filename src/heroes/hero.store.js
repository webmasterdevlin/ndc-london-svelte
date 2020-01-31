import {writable, derived} from 'svelte/store';
import {get} from '../shared/api.call';

const initialState = {
    heroes: [],
    hero: {},
    isLoading: false,
    error: '',
};

const path = "heroes";

function createHeroStore() {
    const {subscribe, update} = writable(initialState);
    return {
        subscribe,
        loadHeroes: async () => {
            update(state => (state = {...state, isLoading: true}))
        }
    }
}