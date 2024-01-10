import { useState, useEffect} from "react";
import axios from "axios";
import './Pokemon.css'

function Pokemon({searchQuery}) {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`);


    useEffect(() => {
        const abortController = new AbortController();


    // DE FUNCTIE OM DE POKEMONS OP TE HALEN VANAF DE ENDPOINT
    // MET EEN TRY CATCH FINALLY BLOCK
    async function fetchPokemon() {

        setIsLoading(true);
        setError(false);

        try {
            const { data } = await axios.get(endpoint, {
                signal: abortController.signal,
            });

            console.log(data);
            setPokemon(data);

        } catch (error) {

            setError("Something went wrong");
        } finally {
            setIsLoading(false);
        }

    }

    fetchPokemon();

    return () => {
        console.log("Clean up");
        abortController.abort();
    };
}, []);

    return (
        <>

              <article className="pokemon-card">
                  <h2>{pokemon.name}</h2>
                  <img
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}/>
                  <p>Moves: {pokemon.moves.length}</p>
                  <p>Weight: {pokemon.weight}</p>
                  <p>Abilities: </p>
                    <ul>
                    {pokemon.abilities.map((ability) => {
                        return (
                            <li key={`${ability.ability.name}-${pokemon.name}`}>
                                {ability.ability.name}
                            </li>
                        )
                    })}
                    </ul>
              </article>

        </>
    )

}

export default Pokemon
