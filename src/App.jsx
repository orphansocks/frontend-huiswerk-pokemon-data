import './App.css'
import Pokemons from "./components/pokemons/Pokemons.jsx";
import logo from "./assets/Pokemon_logo.png";

function App() {

    return <>
        <header className="outer-content-container">
                <div className="inner-content-container header-section">
                    <img
                        src={logo}
                        alt="pokemon logo"
                        width="240px"/>
                </div>
        </header>

        <main>

            <section className="outer-content-container">
                <div className="inner-content-container">
                        <Pokemons
                           endpoint="https://pokeapi.co/api/v2/pokemon/"
                        />
                    </div>
            </section>

        </main>

    </>
}

export default App
