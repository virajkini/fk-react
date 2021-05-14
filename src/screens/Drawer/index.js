import { useState } from 'react';

import Colors from '../../components/Colors';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { COLORS_LIST } from '../../constants';

import CloseIcon from '../../resources/images/CloseIcon.png';

import './styles.css';

function Drawer({onClose, onSubmit}) {

    const [formData, updateFormData] = useState({
        title: '',
        subTitle:'',
        color: '',
    })

    const { title, subTitle, color} = formData;

    const handleChange = (value, key) => {
        updateFormData({
            ...formData,
            [key]: value,
        })
    }

    const handleClick = (e) => {
        e.preventDefault();

        onSubmit(formData);
        updateFormData({
            title: '',
            subTitle:'',
            color: '',
        });

    }

    const renderHeader = () => (
        <div className='header'>
            <h2>Creative Creation</h2>
            <img src={CloseIcon} alt='close_icon' onClick={onClose}/>
        </div>
    )

    const renderForm = () => (
        <form className='form'>
            <Input 
                label='title'
                placeholder='Enter title'
                onChange={(e) => handleChange(e.target.value, 'title')}
                value={title}
                width='80%'
            />
            <div className='seperator'/>
            <Input 
                label='subtitle'
                placeholder='Enter subtitle'
                onChange={(e) => handleChange(e.target.value, 'subTitle')}
                value={subTitle}
                width='80%'
            />
            <div className='seperator'/>
            <Colors 
                data={COLORS_LIST}
                label={'background color'}
                selected={color}
                onChange={(value) => handleChange(value, 'color')}
            />
            <Button
                onClick={handleClick}
                label={'Done'}
                disabled={!(title && subTitle && color)}
            />
        </form>
    )

    return (
        <div className='drawer-wrapper'>
               {renderHeader()}
                <div className='seperator'/>
                {renderForm()}
        </div>
    )
}

export default Drawer;
