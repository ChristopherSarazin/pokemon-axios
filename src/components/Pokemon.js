import React, { useState } from "react"

const Pokemon = () => {

    const [allPokemon, setAllPokemon] = useState([])



    const clickHandler = () => {
        console.log("Clicked!")
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {  // means when the response is received back succsesfuly from the api call, what to do with it
                return res.json()
            })
            .then(res => {
                console.log(res)
                setAllPokemon(res.results)
            })
            .catch(err => { // means if there were any errors that came up in our api request, this is where we will havndle those errors
                console.log(err)
            })
    }
    return (
        <div>
            <button onClick={clickHandler} className="btn btn-success">Show the Pokemon!</button>
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
};
export default Pokemon;