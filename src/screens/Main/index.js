import { useState, useEffect } from 'react';

import Card from '../../components/Card';
import Colors from '../../components/Colors';
import Input from '../../components/Input';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';

import { COLORS_LIST } from '../../constants';

import './styles.css';

function Main({cardList, showDrawer, onShow}) {
    const [filter, updateFilter] = useState({
        color: '',
        text: '',
    })

    const [list, updateList] = useState([]);


    // whenever cardList gets updated, remove filters and update the list with cardList
    useEffect(() => {
        updateFilter({
            color: '',
            text: '',
        });
        updateList(cardList);
    }, [cardList])

    // filter list
    useEffect(() => {
            const filteredList = cardList.filter((item) => {

                    const { title, subTitle, color } = item;
                    const { text, color: filterColor } = filter;

                    let isValid = false;

                    if(text) {
                        if ( title.toLowerCase().includes(text.toLowerCase()) || 
                             subTitle.toLowerCase().includes(text.toLowerCase())
                        ) {
                            isValid = true;
                        } else {
                            return false;
                        }
                    }

                    if(filterColor) {
                        if(color === filterColor) {
                            isValid = true;
                        } else {
                            return false;
                        }
                    }

                    if(!filterColor && !text) {
                        isValid=true;
                    }

                    return isValid;   
            })

            updateList(filteredList);


    }, [filter.color, filter.text])

    const handleTextChange = (e) => {
        updateFilter({
            ...filter,
            text: e.target.value,
        })
    }

    const handleColorChange = (value) => {
        updateFilter({
            ...filter,
            color: value,
        })
    }

    const renderFilter = () => (
        <div>
            <h2>Filter By:</h2>
            <div className='seperator'/>
            <div className='filter'>
                <Colors 
                        data={COLORS_LIST}
                        label={'color'}
                        selected={filter.color}
                        onChange={handleColorChange}
                />
                <Input 
                    label='title / subtitle:'
                    placeholder='search across title and subtitle'
                    onChange={handleTextChange}
                    value={filter.text}
                    width='200px'
                />
            </div>
        </div>
       
    )

    const renderProgressBar = () => (
        <ProgressBar
            value={cardList.length}
            max={5}
            label={`${cardList.length} / 5 Creatives`}
        />
    )

    const renderAddButton = () => (
        <Button
            onClick={onShow}
            disabled={showDrawer}
            label={'+  Add Creative'}
        />
    )

    const renderCardList = () => (
        <div>
            {
                list.map((data, index) => (
                    <Card 
                        data={data}
                        key={index}
                    />
                ))
            }
        </div>
    )

    return (
        <div className='main-wrapper'>
            {renderFilter()}
            <div className='seperator'/>
            <div className='seperator'/>
            {renderProgressBar()}
            <div className='seperator'/>
            {renderAddButton()}
            <div className='seperator'/>
            <div className='seperator'/>
            {renderCardList()}
        </div>
    )
}

export default Main;
