import React from 'react';
import style from './faq.module.scss';
import AccordionItem from "./accordionItem/accordionItem";
import {ILanguage} from "../../../interfaces/languageInterface";
import {LayoutGroup} from "framer-motion";

export interface itemListI{
    id: number,
    elementLabel: string,
    body: string
}


const Faq = ({language}:ILanguage) => {
    const itemList = [
        {id: 1, elementLabel: `${language === 'EN' ? "Can I download my Instagram story anonymously?" : "Могу ли я загрузить свою историю из Instagram анонимно?"}`, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, consectetur deleniti dicta ducimus enim, eum impedit ipsam labore maiores nobis quis sint sunt suscipit totam! Aperiam assumenda commodi cum dolor ducimus ex expedita hic, incidunt minus mollitia nulla sapiente."},
        {id: 2, elementLabel: `${language === 'EN' ? "What kind of content does your service allow you to view and download?" : "Какой контент ваш сервис позволяет вам просматривать и скачивать?"}`, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, consectetur deleniti dicta ducimus enim, eum impedit ipsam labore maiores nobis quis sint sunt suscipit totam! Aperiam assumenda commodi cum dolor ducimus ex expedita hic, incidunt minus mollitia nulla sapiente."},
        {id: 3, elementLabel: `${language === 'EN' ? "Is the story downloaded in high quality?" : "История скачивается в высоком качестве?"}`, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, consectetur deleniti dicta ducimus enim, eum impedit ipsam labore maiores nobis quis sint sunt suscipit totam! Aperiam assumenda commodi cum dolor ducimus ex expedita hic, incidunt minus mollitia nulla sapiente."},
        {id: 4, elementLabel: `${language === 'EN' ? "Is the instagram story uploader safe?" : "Безопасен ли загрузчик историй в Instagram?"}`, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, consectetur deleniti dicta ducimus enim, eum impedit ipsam labore maiores nobis quis sint sunt suscipit totam! Aperiam assumenda commodi cum dolor ducimus ex expedita hic, incidunt minus mollitia nulla sapiente."},
    ]
    return (
        <div className={style.faqContainer}>
            <div className={style.faqBody}>
                <h2>FAQ</h2>
                <LayoutGroup>
                <div className={style.accordionsContainer}>
                    {itemList.map((el:itemListI)=><AccordionItem key={el.id} data={el}/>)}</div>
                </LayoutGroup>
            </div>
        </div>
    );
};

export default Faq;
