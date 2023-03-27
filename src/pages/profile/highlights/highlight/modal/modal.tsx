import React, {useEffect} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import style from "../../../publications/style.module.scss";

interface ModalI {
    username: string;
    open: boolean;
    setOpen: Function;
    allData: {
        caption: string;
        like_count: number;
        media: [{
            big?: string;
            video?: string
        }]
    };
}

const Modal = ({open, setOpen, allData, username}: ModalI) => {
    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                setOpen(false)
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);
    if (open) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    const returnBigData: Function = () => {
        if (allData?.media[0]?.video) {
            return <video controls={true}>
                <source src={allData?.media[0]?.video} type="video/mp4"/>
            </video>
        } else if (allData?.media[0]?.big) {
            return <img src={`${allData?.media[0]?.big}`} alt={'Instagram image'}/>
        }
        return null
    }
    const returnUrlData: Function = () => {
        if (allData?.media[0]?.video) {
            return allData?.media[0]?.video
        } else if (allData?.media[0]?.big) {
            return allData?.media[0]?.big
        }
        return null
    }
    const downloadImage = (src: string) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = src;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx: any = canvas.getContext('2d');
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
            <AnimatePresence key={"fullPictureContainer"}>
                {open &&
                    <motion.div key={"fullPicture"} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={style.fullPublication}>
                        <span className={style.closeBtn} onClick={() => setOpen(false)}>&#9587;</span>
                        <div className={style.fullPublicationImg}>
                            {returnBigData()}
                        </div>
                        <div className={style.fullPublicationDesc}>
                            <div className={style.userData}>
                                <p>{username}</p>
                                <p>Likes: {allData.like_count}</p>
                            </div>
                            <div className={style.publicationDesc}>
                                <p>{allData?.caption}</p>
                            </div>
                            <button onClick={() => downloadImage(`${returnUrlData()}`)}>Save</button>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
            );
            };

            export default Modal;
