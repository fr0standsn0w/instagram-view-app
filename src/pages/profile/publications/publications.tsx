import React from 'react';
import style from './style.module.scss';
import Publication from "./publication/publication";
import pub from "../../../asstets/img/pub.jpg";
import {useSelector} from "react-redux";
import {IRootState} from "../../../redux/store";

const Publications = () => {
    const {cache} = useSelector((state: IRootState) => state.profile.data)
    const posts = cache?.posts?.page_1
    const arr = posts && (Object.keys(posts).map(key => posts[key]))
    const data = arr?.map((el: any) => el.media)
    const parsedData: any = []
    data?.forEach((el: any) => {
        parsedData.push(el[0]?.big)
    })
    return (
        <div className={style.publicationsContainer}>
            <h2>Publications</h2>
            <div className={style.publications}>
                {parsedData?.map((el:any) => <Publication key={Math.floor(Math.floor(Math.random() * (9999 - 1 + 1)) + 1)} img={el}/>)}
            </div>
        </div>
    );
};

export default Publications;
