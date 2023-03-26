import React, {useState} from 'react';
import style from "../style.module.scss";
import {AnimatePresence, motion} from "framer-motion";

interface imgI {
    img: string
}

const Publication = ({img}: imgI) => {
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
        <div className={style.publication}>
            <div className={style.publicationImgContainer} onClick={() => {
                setOpen(true)
            }}>
                <img src={img} alt={'Simple img'}/>
            </div>
{/*            <div className={style.publicationData}>
                <p>05 January 2023</p>
                <p>19:21:32</p>
            </div>
            <button >Learn more
            </button>*/}
            <AnimatePresence key={"fullPictureContainer"}>
            {open &&
                    <motion.div key={"fullPicture"} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={style.fullPublication}>
                        <div className={style.fullPublicationImg}>
                            <img src={img} alt=""/>
                        </div>
                        <div className={style.fullPublicationDesc}>
                            <div className={style.userData}>
                                <p>@sinitovskiy1</p>
                                <p>Likes 99</p>
                            </div>
                            <div className={style.publicationDesc}>
                                <p>В поле.</p>
                            </div>
                            <button onClick={()=>downloadImage(img)}>Save</button>
                        </div>
                    </motion.div>
            }

            {open && <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={style.layout}
                                 onClick={() => setOpen(false)}></motion.div>}
            </AnimatePresence>
        </div>
    );
};

export default Publication;
