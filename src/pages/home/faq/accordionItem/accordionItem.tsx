import React, {FC, useState} from 'react';
import style from './accordionItem.module.scss';
import {itemListI} from "../faq";
import {AnimatePresence, motion} from "framer-motion";

type PropsType<T> = {
    data: T
}

const AccordionItem: FC<PropsType<itemListI>> = (props) => {
    const elementLabel = props.data.elementLabel
    const body = props.data.body
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen((isOpen) => !isOpen);
    };
    return (
            <div className={style.accordionContainer}>
                <div className={style.accordion} onClick={handleToggle}>
                    <p>{elementLabel}</p>
                    <div className={style.arrowContainer}>
                        <svg style={isOpen ? {transform: "rotate(180deg)"} : {transform: "rotate(0)"}} width="43" height="25" viewBox="0 0 43 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M43 3.76858L21.5 25L0 3.76858L3.81625 0L21.5 17.4628L39.1838 0L43 3.76858Z" fill="#BBB4B4"/>
                        </svg>
                    </div>
                </div>
                <AnimatePresence>
                {isOpen &&
                    <motion.div key={"accordion"}
                                initial={{transform: "scaleY(0)", transformOrigin: "top"}}
                                animate={{transform: "scaleY(1)"}}
                                transition={{ease: "easeInOut", duration: 0.3}}
                                exit={{transform: "scaleY(0)", transformOrigin: "top"}}
                                className={style.textBody} onClick={handleToggle}>
                        <p>{body}</p>
                    </motion.div>
                }
                </AnimatePresence>
            </div>
    );
};

export default AccordionItem;
