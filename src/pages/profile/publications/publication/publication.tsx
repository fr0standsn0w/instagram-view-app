import React, {useEffect, useState} from 'react';
import style from "../style.module.scss";
import {AnimatePresence, motion} from "framer-motion";
import Modal from "../../highlights/highlight/modal/modal";

interface imgI {
    username: string;
    allData: {
        caption: string;
        like_count: number;
        media: [{
            big?: string;
            small?: string;
            thumb?: string;
            video?: string
        }]
    };
}


const Publication = ({username, allData}: imgI) => {
    const [open, setOpen] = useState(false)

    const returnSmallData: Function = () => {
        let element = ''
        if (allData?.media[0]?.thumb) {
            element = allData?.media[0]?.thumb
        } else if (allData?.media[0]?.small) {
            element = allData?.media[0]?.small
        }
        return element
    }
    return (
        <div className={style.publication}>
            <div className={style.publicationImgContainer} onClick={() => {
                setOpen(true)
            }}>
                <img src={`${returnSmallData()}`} alt={'Simple img'}/>
            </div>
                <Modal open={open} setOpen={setOpen} allData={allData} username={username}/>
            <AnimatePresence key={"overlayContainer"}>
            {open && <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={style.layout}
                                     onClick={() => setOpen(false)}></motion.div>}
            </AnimatePresence>
        </div>
    );
};

export default Publication;
