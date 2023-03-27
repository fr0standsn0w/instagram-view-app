import React from 'react';
import style from './style.module.scss';
import Highlight from "./highlight/highlight";
import {useSelector} from "react-redux";
import {IRootState} from "../../../redux/store";

const Highlights = () => {
    const {cache} = useSelector((state:IRootState) => state.profile.data)
    return (
        <div className={style.highlightsContainer}>
            <h2>Highlights</h2>
            <p className={style.showMore}>Show more</p>
            <div className={style.highlights}>
                {cache?.highlights?.map(el => <Highlight key={Math.floor(Math.floor(Math.random() * (9999 - 1 + 1)) + 1)} pic={`${el.cover_media}`}/>)}
            </div>
        </div>
    );
};

export default Highlights;
