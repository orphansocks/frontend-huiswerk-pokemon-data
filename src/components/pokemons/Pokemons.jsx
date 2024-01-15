import { useState, useEffect} from "react";
import axios from "axios";
import './Pokemons.css'
import PokemonCard from "../pokemonCard/PokemonCard.jsx";
import Navigation from "../navigation/Navigation.jsx";


function Pokemons({endpoint}) {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon/");


    // START USE EFFECT
    // DE ABORTCONTROLLER IS EEN CONTROLLER WAARMEE JE VERZOEKEN (REQUESTS?) KUNT AFBREKEN
    // WANNEER JE WILT.
    useEffect(() => {
        const abortController = new AbortController();


        // DE FUNCTIE OM DE DATA OP TE HALEN VANAF DE ENDPOINT
        // MET EEN TRY CATCH FINALLY BLOCK
        // SIGNAL KAN WORDEN GEBRUIKT OM DE ASYNCHRONE BEWERKING AAN TE ZETTEN OF AF TE BREKEN
        async function fetchData() {

            setIsLoading(true);
            setError(false);

            try {
                const {data} = await axios.get(endpoint, {
                    signal: abortController.signal,
                });

                console.log( 'data; ', data.results );
                setPokemon(data);

            } catch (error) {
                setError("Something went wrong");
                console.error('Request is canceled...');
            } finally {
                setIsLoading(false);
            }

        }

        fetchData();

        // THE USEEFFECT CLEANUP IS A FUNCTION IN THE USEEFFECT HOOK THAT ALLOWS TO TIDY UP
        // YOURCODE BEFORE YOUR COMPONENT UNMOUNTS/ IT PREVENTS MEMORY LEAKS!

        return function cleanup()  {
            console.log("Clean up");
            abortController.abort();
        };
        }, [ endpoint ]);

    // HIET STOPT HET USEEFFECT BLOCK

    // JE KAN USEEFFECTEN GEBRUIKEN OM TE ZIEN WAT DE WAARDE IS IN DE STATE ALS DEZE VERANDERD

    useEffect( () => {
        console.log( 'endpoint: ', endpoint );
    }, [ endpoint ] );

    useEffect( () => {
        console.log( 'pokemon: ', pokemon );
    }, [ pokemon ] );



// HIER START DE SECTION DIE TERUG GEGEVEN WORDT
    // DE BUTTONS EN DE POKEMONKAART WORDEN OPGEHAALD
    return (
        <div className="pokemon-deck">

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
                    {pokemon.map((pokemon) => {
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
