import './Navigation.css';
import Button from '../button/Button.jsx';



function Navigation({disabledPrevious, clickHandlerPrevious, disabledNext, clickHandlerNext}) {

    return (
        <section className="button-navigation">
            <Button
                disabled={disabledPrevious}
                clickHandler={clickHandlerPrevious}
            >Previous
            </Button>

            <Button
                disabled={disabledNext}
                clickHandler={clickHandlerNext}
            >Next
            </Button>
        </section>
    );
}

export default Navigation;