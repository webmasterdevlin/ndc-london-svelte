import {writable, derived} from 'svelte/store';
import {get, deleteById} from '../shared/api.call';

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
            update(state => (state = {...state, isLoading: true}));
            try {
                const res = (await get(path)).data;
                const sortedHeroes = res.sort((hOne, hTwo) => 
                hOne.firstName.toLowerCase() < hTwo.firstName.toLowerCase()
                ? -1 : 1 );
                update(state => (state = {...state, heroes: sortedHeroes}))
            } catch (e) {
                alert(e.message);
            }
            update(state => (state = {...state, isLoading:false}))
        },
        removeHero: async id => {
            update(state => (state = {...state, isLoading: true}));
            try {
                await deleteById(path, id);
                update(state => {
                    const updatedHeroes = state.heroes.filter(h => h.id !== id);
                    return (state = { ...state, heroes: updatedHeroes });
                })
            } catch (e) {
                alert(e.message);
            }
            update(state => (state = {...state, isLoading: false}));
        }
    }
}

export const heroStore = createHeroStore();