import './Navigation.css';
import Button from '../button/Button.jsx';



function Navigation() {

    return (
        <section className="button-navigation">
            <Button
                disabled={!pokemon.previous}
                clickHandler={() => setSearchQuery("null")}
            >
                Previous
            </Button>
            <Button
                disabled={!pokemon.next}
                clickHandler={() => setSearchQuery("?limit=20&offset=20")}
            >
                Next
            </Button>
        </section>
    );
}

export default Navigation;