import React, {useState} from 'react';
import style from './style.module.scss';
import {LanguageToggle} from "../../App";
import {Link} from 'react-router-dom';
import {useMediaQuery} from "../../hooks/useMediaQuery";
import Menu from "./Menu/Menu";

const Header = () => {
    const isActive = useMediaQuery('(max-width: 425px)');
    const [menuActive, setMenuActive] = useState(false)
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
                        <div className={menuActive ? style.layoutActive :style.layout} onClick={() => setMenuActive(!menuActive)}/>
                    </>
                    :
                    <div className={style.menuContainer}>
                        <ul>
                            <li><Link to={'/profile'}>Profile</Link></li>
                            <li><Link to={''}>Posts</Link></li>
                            <li><Link to={''}>Highlights</Link></li>
                            {/*<LanguageToggle/>*/}
                            <div className={style.langContainer}>
                                En
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
