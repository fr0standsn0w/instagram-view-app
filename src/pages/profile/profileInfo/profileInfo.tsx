import React from 'react';
import style from './style.module.scss';
import fav from '../../../asstets/img/favicon.jpg'

const ProfileInfo = () => {
    return (
        <div className={style.profileInfoContainer}>
            <div className={style.profilePicContainer}>
                <div className={style.profilePic}>
                    <img src={`${fav}`} alt=""/>
                </div>
            </div>
            <div className={style.mainInfo}>
                <div className={style.mainInfoContent}>
                    <h4>@sinitovskiy1</h4>
                    <p>поль</p>
                </div>
                <div className={style.status}>
                    Anonymous browsing
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
