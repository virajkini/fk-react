import './styles.css';

function Button({onClick, label, disabled = false}) {
    return (
        <button
            className='custom-btn'
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button;
