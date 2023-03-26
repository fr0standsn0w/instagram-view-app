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
                        <motion.div key={"highlightLayout"}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className={style.layout}
                            onClick={() => setOpen(false)}>
                        </motion.div>
                        <motion.div key={"fullHighlight"} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={style.fullHighlight}>
                            <div className={style.highlightInfo}>
                                <a onClick={()=> downloadImage(pic)}><svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 28C6.8803 28 4.64176 27.0769 2.78436 25.2308C0.926971 23.3846 -0.00115044 21.1282 1.07018e-06 18.4615C1.07018e-06 16.1758 0.676516 14.1392 2.02955 12.3516C3.38258 10.5641 5.15303 9.42124 7.34091 8.92308C8.00303 6.54945 9.234 4.55678 11.0338 2.94506C12.8336 1.33333 14.9133 0.351648 17.2727 0V14.1978L14.5091 11.4725L12.0909 13.9341L19 20.967L25.9091 13.9341L23.4909 11.4725L20.7273 14.1978V0C23.6924 0.410256 26.1613 1.76586 28.1338 4.06681C30.1064 6.36777 31.0921 9.07077 31.0909 12.1758C33.0773 12.4103 34.7257 13.2823 36.0361 14.7921C37.3465 16.3018 38.0011 18.0671 38 20.0879C38 22.2857 37.244 24.1541 35.7321 25.6932C34.2201 27.2322 32.3852 28.0012 30.2273 28H9.5Z" fill="#09FF3F"/>
                                </svg>
                                </a>
                            </div>
                            <div className={style.highlightCount}>
                                <span className={style.highlightElementActive}></span>
                                <span className={style.highlightElement}></span>
                                <span className={style.highlightElement}></span>
                                <span className={style.highlightElement}></span>
                            </div>
                            <div className={style.fullHighlightPic}>
                                <img src={pic} alt=""/>
                            </div>
                            <div onClick={() => setOpen(false)} className={style.close}><span/></div>
                        </motion.div>
                    </>
                }
            </AnimatePresence>

        </>
    );
};

export default Highlight;
