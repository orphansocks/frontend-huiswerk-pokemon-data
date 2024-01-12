import { useState, useEffect} from "react";
import axios from "axios";
import './Pokemons.css'
import PokemonCard from "../pokemonCard/PokemonCard.jsx";
import Navigation from "../navigation/Navigation.jsx";


function Pokemons({searchQuery}) {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`);


    // START USE EFFECT
    useEffect(() => {
        const abortController = new AbortController();


        // DE FUNCTIE OM DE DATA OP TE HALEN VANAF DE ENDPOINT
        // MET EEN TRY CATCH FINALLY BLOCK
        async function fetchData() {

            setIsLoading(true);
            setError(false);

            try {
                const {data} = await axios.get(endpoint, {
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

        fetchData();

        return () => {
            console.log("Clean up");
            abortController.abort();
        };

    }, [searchQuery]);

    // HIET STOPT HET USEEFFECT BLOCK


// HIER START DE SECTION DIE TERUG GEGEVEN WORDT
    // DE BUTTONS EN DE POKEMONKAART WORDEN OPGEHAALD
    return (
        <div>

            <h2>This is your Pokemon Deck</h2>
            {isLoading && <h2> Loading ...</h2>}
            {error && <h2>{error}</h2>}

            <Navigation
                disabledPrevious={!pokemon.previous}
                clickHandlerPrevious={() => setEndpoint(pokemon.previous)}
                disabledNext={!pokemon.next}
                clickHandlerNext={() => setEndpoint(pokemon.next)}
            />

            {pokemon.length > 0 &&

                <ul>
                    {pokemon?.map((pokemon) => {
                        return (
                            <PokemonCard
                                key={index}
                                name={pokemon.name}
                                img={pokemon.sprites.front_default}
                                moves={pokemon.moves.length}
                                weight={pokemon.weight}
                                abilities="abilities"
                            />
                        )
                    })}

                </ul>

            }



        </div>

    );
}



export default Pokemons;
