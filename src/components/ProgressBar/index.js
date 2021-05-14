import './styles.css';

function ProgressBar({value, max, label}) {
    return (
        <div className='progress-wrapper '>
            <div className='progress'>
                <div className='progress-value' style={{width:`${100 * value / max}%`}}></div>
            </div>
            <label htmlFor='cards' >{label}</label>
        </div>
    )
}

export default ProgressBar;
