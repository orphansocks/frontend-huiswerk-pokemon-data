import './PokemonCard.css'

function PokemonCard({ name, image, moves, weight, abilities}) {
    return (

        <article className="pokemon-card">
            <h2>{name}</h2>
            <img
                src={image}
                alt={name}/>
            <p>Moves: {moves}</p>
            <p>Weight: {weight}</p>
            <p>Abilities: {abilities} </p>
        </article>
    );
}

export default PokemonCard;