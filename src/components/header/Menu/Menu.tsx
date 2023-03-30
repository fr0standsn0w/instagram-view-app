import React from 'react';
import style from './Menu.module.scss'
import {Link} from "react-router-dom";
import {LanguageToggle} from "../Header";

interface MenuI {
    active: boolean,
    setActive: Function,
    items:
        {
            id: number,
            href: string,
            value: string
        }[];
    isOpen: boolean;
    setIsOpen: Function
}

const Menu = ({active, setActive, items, isOpen, setIsOpen}: MenuI) => {
    return (
        <div className={active ? `${style.menuActive}` : style.menu}>
            <div className={style.menuContent}>
                <ul className={style.menuUl}>
                    {items.map(item =>
                        <li key={item.id} className={style.menuLi}>
                            <Link className={style.menuA} to={item.href} onClick={() => setActive(!active)}>{item.value}</Link>
                        </li>
                    )}
                    <div className={style.langContainer} onClick={()=> setIsOpen(!isOpen)}>
                        <LanguageToggle isOpen={isOpen}/>
                        <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                             style={isOpen ? {transform: "rotate(180deg)"} : {transform: "rotate(0)"}}>
                            <path
                                d="M20.1372 2.01137L10.1372 12.0114L0.137207 2.01137L1.91221 0.236368L10.1372 8.46137L18.3622 0.236368L20.1372 2.01137Z"
                                fill="#6A6868"/>
                        </svg>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
