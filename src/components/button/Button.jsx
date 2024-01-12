import './Button.css';

function Button({ clickHandler, disabled }) {
    return (
        <button
            type="button"
            className="prev-next-button"
            onClick={clickHandler}
            disabled={disabled}
        >

        </button>
    );
}

export default Button;