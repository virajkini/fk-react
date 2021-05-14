import './styles.css';

function Colors({data, label, onChange, selected}) {
    return (
        <div>
            <label>{label}</label>
            <div className='colors-wrapper'>
                {
                    data.map((item) => (
                        <div key={item.label}>
                            <div 
                                className={selected.label === item.label ? 'radio selected': 'radio'}
                                onClick={() => {onChange(item)}}
                                style={{backgroundColor: item.value}}
                            ></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Colors;
