import React from 'react';

import './styles.css';

function Input({ value, onChange, placeholder, label, width}) {
    return (
        <div>
            <label htmlFor='text-input'>
                {label || ''}
            </label>
            <input 
                className='text-input'
                name='text-input'
                type='text'
                placeholder={placeholder || ''}
                onChange={onChange}
                value={value}
                style={{width: width}}
            />
        </div>
    )
}

export default Input;
