import React, {useState} from 'react';
import style from "../style.module.scss";
import {AnimatePresence, motion} from "framer-motion";

interface highlightI {
    pic: string
}

const Highlight = ({pic}: highlightI) => {
    const [open, setOpen] = useState(false)
    const downloadImage = (src:string) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = src;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx : any = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const a = document.createElement('a');
            a.download = 'download.png';
            a.href = canvas.toDataURL('image/jpg');
            a.click();
        };
    }
    return (
        <>
            <div className={style.highlight} onClick={() => setOpen(true)}>
                <img src={pic} alt=""/>
            </div>
            <AnimatePresence>
                {open &&
                    <>
                        <motion.div
                            key={"highlightLayout"}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className={style.layout}
                            onClick={() => setOpen(false)}>
                        </motion.div>
                        <motion.div key={"fullHighlight"} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={style.fullHighlight}>
                            <div className={style.highlightInfo}>
                                <p>2022-11-04 15:36:18</p>
                                <button onClick={()=> downloadImage(pic)}>Save</button>
                            </div>
                            <div className={style.highlightCount}><span className={style.highlightElementActive}></span><span
                                className={style.highlightElement}></span><span
                                className={style.highlightElement}></span><span className={style.highlightElement}></span></div>
                            <div className={style.fullHighlightPic}>
                                <img src={pic} alt=""/>
                            </div>
                        </motion.div>
                    </>
                }
            </AnimatePresence>

        </>
    );
};

export default Highlight;
