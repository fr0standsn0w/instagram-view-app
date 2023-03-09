import React from 'react';
import style from './faq.module.scss';
import AccordionItem from "./accordionItem/accordionItem";

export interface itemListI{
    id: number,
    elementLabel: string,
    body: string
}

const itemList = [
    {id: 1, elementLabel: "Can I download my Instagram story anonymously?", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, consectetur deleniti dicta ducimus enim, eum impedit ipsam labore maiores nobis quis sint sunt suscipit totam! Aperiam assumenda commodi cum dolor ducimus ex expedita hic, incidunt minus mollitia nulla sapiente."},
    {id: 2, elementLabel: "What kind of content does your service allow you to view and download?", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, consectetur deleniti dicta ducimus enim, eum impedit ipsam labore maiores nobis quis sint sunt suscipit totam! Aperiam assumenda commodi cum dolor ducimus ex expedita hic, incidunt minus mollitia nulla sapiente."},
    {id: 3, elementLabel: "Is the story downloaded in high quality?", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, consectetur deleniti dicta ducimus enim, eum impedit ipsam labore maiores nobis quis sint sunt suscipit totam! Aperiam assumenda commodi cum dolor ducimus ex expedita hic, incidunt minus mollitia nulla sapiente."},
    {id: 4, elementLabel: "Is the instagram story uploader safe?", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, consectetur deleniti dicta ducimus enim, eum impedit ipsam labore maiores nobis quis sint sunt suscipit totam! Aperiam assumenda commodi cum dolor ducimus ex expedita hic, incidunt minus mollitia nulla sapiente."},
]

const Faq = () => {
    return (
        <div className={style.faqContainer}>
            <div className={style.faqBody}>
                <h2>FAQ</h2>
                <div className={style.accordionsContainer}>
                    {itemList.map((el:itemListI)=><AccordionItem key={el.id} data={el}/>)}</div>
            </div>
        </div>
    );
};

export default Faq;
