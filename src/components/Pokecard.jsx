import '../styles/pokecard.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Pokecard = ({url}) => {

    const[pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(url).then( res => setPokemon( res.data ))
    }, [])


    return (
        <div className={`pokecardBox ${ pokemon.types?.[0].type?.name }`}> 
            <figure>
                <img src={`/shiny/${pokemon.id}.gif`} alt="" />
            </figure>
            <h5>{ pokemon.name }</h5>
        </div>
    );
};

export default Pokecard;