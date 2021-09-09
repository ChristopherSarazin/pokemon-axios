import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonAxios = () => {


    const [allPokemon, setAllPokemon] = useState([])

    
    const clickHandler = () => {
        console.log("clicked!")
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {
                console.log(res)
                setAllPokemon(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
        };
    return (
        <div>
            <button  onClick={clickHandler}  className="btn btn-success">Show me the Pokemon!</button>
            {
                allPokemon.map((pokemon, idx) => {
                    return <div style={{ backgroundColor: "gray" }} key={idx} className="card">
                        <div className="card-body">
                            <h4 className="card-title">{pokemon.name}</h4>
                        </div>
                    </div>
                })
            }
        </div>
    );

}


export default PokemonAxios;