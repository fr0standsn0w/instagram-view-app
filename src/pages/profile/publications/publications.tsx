import React from 'react';
import style from './style.module.scss';
import Publication from "./publication/publication";
import pub from "../../../asstets/img/pub.jpg";

const Publications = () => {
    return (
        <div className={style.publicationsContainer}>
            <h2>Publications</h2>
            <div className={style.publications}>
                <Publication img={pub}/>
                <Publication img={pub}/>
                <Publication img={pub}/>
                <Publication img={pub}/>
                <Publication img={pub}/>
                <Publication img={pub}/>
                <Publication img={pub}/>
                <Publication img={pub}/>
            </div>
        </div>
    );
};

export default Publications;
