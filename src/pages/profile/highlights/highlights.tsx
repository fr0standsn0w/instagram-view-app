import React from 'react';
import style from './style.module.scss';
import Highlight from "./highlight/highlight";
import pic from '../../../asstets/img/highlight.png'

const Highlights = () => {
    return (
        <div className={style.highlightsContainer}>
            <h2>Highlights</h2>
            <div className={style.highlights}>
                <Highlight pic={pic}/>
                <Highlight pic={pic}/>
                <Highlight pic={pic}/>
                <Highlight pic={pic}/>
            </div>
        </div>
    );
};

export default Highlights;
