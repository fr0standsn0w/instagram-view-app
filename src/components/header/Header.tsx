import React, {ComponentProps, useEffect, useState} from 'react';
import style from './style.module.scss';
import {Link} from 'react-router-dom';
import {useMediaQuery} from "../../hooks/useMediaQuery";
import Menu from "./Menu/Menu";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "../../redux/languageSlice";
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";
import {IRootState} from "../../redux/store";

const languageOptions = [
    {key: "English", text: "EN", value: "EN"},
    {key: "Russian", text: "RU", value: "RU"}
];


export const LanguageToggle = ({isOpen}:ComponentProps<any>) => {
    const dispatch = useDispatch()
    const [language, setLanguageLocal] = useState('EN')
    useEffect(()=>{
        dispatch(setLanguage(language))
    }, [dispatch, language])
    return (
        <>
            {language}
            <AnimatePresence>
            {isOpen && <motion.div
                key={"fullPicture"} initial={{transform: "scaleY(0)"}} animate={{transform: "scaleY(1)"}} exit={{transform: "scaleY(0)"}}
                className={style.headerLanguages}>{languageOptions.map(el =>
                <p key={el.key} onClick={() => setLanguageLocal(el.value)}>{el.text}</p>)}</motion.div>}
            </AnimatePresence>
        </>
    );
}

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const isActive = useMediaQuery('(max-width: 425px)');
    const [menuActive, setMenuActive] = useState(false)
    const language = useSelector((state:IRootState) => state.language.data)
    const items = [
        {id: 1, value: 'Profile', href: '/profile'},
        {id: 2, value: 'Posts', href: '/'},
        {id: 4, value: 'Highlights', href: '/'},
    ]
    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <div className={style.logoContainer}>
                    <Link to={'/'}>InstaPul</Link>
                </div>
                {isActive ?
                    <>
                        <div className={menuActive ? style.burgerBtnActive : style.burgerBtn}
                             onClick={() => setMenuActive(!menuActive)}>
                            <span/>
                        </div>
                        <main className={menuActive ? style.menuBurgerActive : style.menuBurger}>
                            <Menu active={menuActive} setActive={setMenuActive} items={items}/>
                        </main>
                        <div className={menuActive ? style.layoutActive : style.layout} onClick={() => setMenuActive(!menuActive)}/>
                    </>
                    :
                    <div className={style.menuContainer}>
                        <ul>
                            <li><Link to={'/profile'}>{language === 'EN' ? <>Profile</> : <>Профиль</>}</Link></li>
                            <li><Link to={''}>{language === 'EN' ? <>Posts</> : <>Посты</>}</Link></li>
                            <li><Link to={''}>{language === 'EN' ? <>Highlights</> : <>Основные моменты</>}</Link></li>
                            <div className={style.langContainer} onClick={()=>setIsOpen(!isOpen)}>
                                <LanguageToggle isOpen={isOpen}/>
                                <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.1372 2.01137L10.1372 12.0114L0.137207 2.01137L1.91221 0.236368L10.1372 8.46137L18.3622 0.236368L20.1372 2.01137Z"
                                        fill="#6A6868"/>
                                </svg>
                            </div>
                        </ul>
                    </div>}

            </div>
        </header>
    );
};

export default Header;
