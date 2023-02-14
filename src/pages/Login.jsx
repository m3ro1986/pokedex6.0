import '../styles/login.css';
import pokedex from '../assets/pokedex.webp'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getName } from '../store/slices/trainerName';
import axios from 'axios';
import { getPokemons } from '../store/slices/pokemons';


const Login = () => {

    const introMessage = 'Hello trainer!!! Give me your name to start.';
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');
    const [ text, setText ] = useState('');

    useEffect( () => {
        const timeout = setTimeout(() => {
            setText( introMessage.slice( 0, text.length + 1 ))
        }, 50)

        return () => clearTimeout( timeout )
    }, [text]);

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=60`).then( res => dispatch( getPokemons( res.data.results ) ))
    }, [])

    const goPokemons = () => {
        dispatch( getName( name ));
        navigate('/pokedex');
    };
    
    return (
        <div className='box'>
            <div className='login'>
                <figure>
                    <div className='lightsGreen'>
                        <div></div>
                        <div></div>
                    </div>
                    <form className='introLogin'>

                        <p> { text } </p>
                        
                        <input 
                            type="text" 
                            autoFocus
                            value={ name }
                            onChange={ e => setName( e.target.value )}
                        />
                        <button onClick={ goPokemons }>Go</button>
                    </form>
                </figure>
            </div>
        </div>
    );
};

export default Login;