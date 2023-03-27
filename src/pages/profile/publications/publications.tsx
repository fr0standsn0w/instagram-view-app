import React from 'react';
import style from './style.module.scss';
import Publication from "./publication/publication";
import {useSelector} from "react-redux";
import {IRootState} from "../../../redux/store";

const Publications = () => {
    const {cache, ig_info} = useSelector((state: IRootState) => state.profile.data)
    const posts = cache?.posts?.page_1
    const arr = posts && (Object.keys(posts).map(key => posts[key]))
    const returnedData: any = () => {
        return arr?.map((el: any) => {
            return <Publication key={Math.floor(Math.floor(Math.random() * (9999 - 1 + 1)) + 1)} allData={el} username={`${ig_info?.username}`}/>
        })
    }
    return (
        <div className={style.publicationsContainer}>
            <h2>Publications</h2>
            <div className={style.publications}>
                {returnedData()}
            </div>
        </div>
    );
};

export default Publications;
