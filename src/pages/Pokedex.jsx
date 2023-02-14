import '../styles/pokedex.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Pokecard from '../components/Pokecard';

const Pokedex = () => {
    const trainer = useSelector( state => state.trainerName );
    const pokemons = useSelector(state => state.pokemons);

    return (
        <div className='pokedexBox'>
            <header>
                <p> Welcome { trainer }, here you can find your favorite Pokemon!</p>
            </header>
            <main>
                {
                    pokemons.map(e => (
                        <Pokecard key={e.url} url={e.url}/>
                    ))
                }
            </main>    
        </div>
    );
};

export default Pokedex;