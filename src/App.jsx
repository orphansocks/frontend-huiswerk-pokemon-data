import './App.css'
import Pokemon from "./components/pokemon/Pokemon.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import pokemon from "./components/pokemon/Pokemon.jsx";

function App() {

    return <>
        <header className="outer-content-container">
                <div className="inner-content-container">
                    <img
                        src="https://nl.vecteezy.com/vector-kunst/29167297-pokemon-logo-ontwerp"
                        alt="pokemon logo"
                        width="420px"/>
                </div>
        </header>
        <nav>
            <Navigation />
        </nav>

        <main>

            <section className="outer-content-container">
                <div className="inner-content-container">
                    <Pokemon
                        searchQuery="ditto"
                    />
                </div>
            </section>

            <section className="outer-content-container">
                <div className="inner-content-container">

                    {pokemon?.map((pokemon) => (

                    return

                    <Pokemon
                    searchQuery={pokemon.name}
                     />
                ))}

                    </div>
            </section>

        </main>

    </>
  )
}

export default App
