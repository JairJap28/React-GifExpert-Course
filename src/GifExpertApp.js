import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import EmptySearch from './components/GifEmptySearch';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const handleAdd = (value) => {
        setCategories([value, ...categories]);
    }

    return (
        <>
            <h2 className="title">GifExpertApp</h2>
            <AddCategory setCategories={handleAdd}/>
            <hr/>
            { 
                categories && categories.length > 0 ? 
                <ol>{ categories.map(item => <GifGrid key={item} category={item}/>) } </ol>
                :
                <EmptySearch />
            }
        </>
    );
}

export default GifExpertApp;