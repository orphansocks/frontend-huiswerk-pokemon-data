import './Button.css';

function Button({ clickHandler, disabled, type = "button" }) {
    return (
        <button
            type={type}
            className="prev-next-button"
            onClick={clickHandler}
            disabled={disabled}
        >

        </button>
    );
}

export default Button;