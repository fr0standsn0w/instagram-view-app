import React from 'react';
import style from './style.module.scss';
import {ILanguage} from "../../../interfaces/languageInterface";

const FirstBlock = ({language}: ILanguage) => {
    return (
        <div className={style.firstBlockContainer}>
            <div className={style.backgroundSun}>
                <svg width="369" height="376" viewBox="0 0 369 376" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="184.5" cy="188" rx="184.5" ry="188" fill="url(#paint0_linear_65_111)" fillOpacity="0.4"/>
                    <defs>
                        <linearGradient id="paint0_linear_65_111" x1="184.5" y1="0" x2="184.5" y2="376" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF00C7"/>
                            <stop offset="0.319355" stopColor="#FF9900" stopOpacity="0.92"/>
                            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>

            </div>

            <div className={style.firstBlockBody}>
                <h2>{language === 'EN' ? <>What is the Instagram story uploader?</> : <>Что такое загрузчик историй в Instagram?</>}</h2>
                <p>
                    {language === 'EN' ? <>You can download instagram story download and instagram highlights by using the instagram story downloader service
                        that we offer you on our
                        website Instagram saver, instagram story will be downloaded in high quality full HD using online instagram screensaver. You can also use
                        the
                        service as an Instagram story viewer where you can Watch anonymous stories and highlighters.</> : <>Вы можете скачать загрузку историй из
                        instagram и основные моменты из instagram, используя сервис загрузки историй из instagram, который мы предлагаем вам на нашем
                        веб-сайт Instagram заставка, история instagram будет загружена в высоком качестве Full HD с помощью онлайн-заставки instagram. Вы также
                        можете использовать
                        сервис для просмотра историй в Instagram, где вы можете смотреть анонимные истории и хайлайтеры.</>}

                </p>
            </div>
        </div>
    );
};

export default FirstBlock;
