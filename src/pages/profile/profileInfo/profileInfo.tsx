import React, {FC} from 'react';
import style from './style.module.scss';
import {useSelector} from "react-redux";
import {IRootState} from "../../../redux/store";
import {ProfileI} from "../../../interfaces/profileInterface";

const ProfileInfo: FC = () => {
    const profileInfo: ProfileI = useSelector((state: IRootState) => state?.profile?.data)
    const {ig_info} = profileInfo
    const profilePic = profileInfo?.cache?.profile_pic
    return (
        <div className={style.profileInfoContainer}>
            <p className={style.browsing}>Anonymous browsing</p>
            <div className={style.profileInfoContent}>
                <div className={style.firstColInfoContainer}>
                    <div className={style.profilePicContainer}>
                        <div className={style.profilePic}>
                            <img src={`${profilePic}`} alt=""/>
                        </div>
                    </div>
                    <div className={style.mainInfoContent}>
                        <h4>{ig_info?.username}</h4>
                        <p>{ig_info?.full_name}</p>
                    </div>
                </div>
                <div className={style.mainInfo}>
                    <div className={style.status}>
                        <div className={style.infoElement}>
                            <p>{ig_info?.media_count}</p>
                            <p>publications</p>
                        </div>
                        <div className={style.infoElement}>
                            <p>{ig_info?.follower_count}</p>
                            <p>followers</p>
                        </div>
                        <div className={style.infoElement}>
                            <p>{ig_info?.following_count}</p>
                            <p>follow</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className={style.noStories}>No Stories for the Last 24 Hours</p>
        </div>
    );
};

export default ProfileInfo;
