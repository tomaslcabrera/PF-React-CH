import React from 'react';
import ItemListContainer from '../items/ItemListContainer';

const MainSection = () => {
    return (
        <div className='main-container'>
            <ItemListContainer numero="0"/>
            <ItemListContainer numero="1"/>
            <ItemListContainer numero="2"/>
            <ItemListContainer numero="3"/>
            <ItemListContainer numero="4"/>
            <ItemListContainer numero="5"/>
            <ItemListContainer numero="6"/>
            <ItemListContainer numero="7"/>
            <ItemListContainer numero="8"/>
        </div>
    );
}

export default MainSection;
