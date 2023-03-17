import React from 'react';
import style from './style.module.scss';
import fav from '../../../asstets/img/favicon.jpg'

const ProfileInfo = () => {
    return (
            <div className={style.profileInfoContainer}>
                <p className={style.browsing}>Anonymous browsing</p>
                <div className={style.profileInfoContent}>
                    <div className={style.firstColInfoContainer}>
                        <div className={style.profilePicContainer}>
                            <div className={style.profilePic}>
                                <img src={`${fav}`} alt=""/>
                            </div>
                        </div>
                        <div className={style.mainInfoContent}>
                            <h4>@sinitovskiy1</h4>
                            <p>поль</p>
                        </div>
                    </div>

                    <div className={style.mainInfo}>
                        {/*<div className={style.mainInfoContent}>
                            <h4>@sinitovskiy1</h4>
                            <p>поль</p>
                        </div>*/}
                        <div className={style.status}>
                            <div className={style.infoElement}>
                                <p>6</p>
                                <p>publications</p>
                            </div>
                            <div className={style.infoElement}>
                                <p>121</p>
                                <p>followers</p>
                            </div>
                            <div className={style.infoElement}>
                                <p>121</p>
                                <p>follow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ProfileInfo;
