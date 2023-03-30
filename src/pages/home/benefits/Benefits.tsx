import React from 'react';
import style from './style.module.scss';
import {ILanguage} from "../../../interfaces/languageInterface";

const Benefits = ({language}: ILanguage) => {
    return (
        <div className={style.benefitsContainer}>
            <div className={style.benefitsBody}>
                <h2>{language === 'EN' ? <>Benefits</> : <>Преимущества</>}</h2>
                <div className={style.tiles}>
                    <div className={style.tile}>
                        <div className={style.tileContainer}>
                            <h3>{language === 'EN' ? <>No account, no registration</> : <>Без аккаунта, без регистрации</>}</h3>
                            <p>{language === 'EN' ? <>Everyone can use the service. Not only do you not need to have a social network profile, but you also do
                                not need to install any
                                additional software. Everything can be done through your browser page.</> : <>Воспользоваться услугой может каждый. Вам не
                                только не нужно иметь профиль в социальной сети, но и не нужно устанавливать никаких
                                дополнительное программное обеспечение. Все можно сделать через страницу вашего браузера.</>}</p>
                        </div>
                    </div>
                    <div className={style.tile}>
                        <div className={style.tileContainer}>
                            <h3>{language === 'EN' ? <>No one will know you are active</> : <>Никто не узнает о вашей активности</>}</h3>
                            <p>{language === 'EN' ? <>You can do anything and watch anyone you want. Our service makes your presence invisible to other account
                                holders.</> : <>Вы можете делать что угодно и наблюдать за кем угодно. Наш сервис делает ваше присутствие невидимым для других
                                владельцев аккаунтов.</>}</p>
                        </div>
                    </div>
                    <div className={style.tile}>
                        <div className={style.tileContainer}>
                            <h3>{language === 'EN' ? <>Downloadable content</> : <>Возможность загрузки контента</>}</h3>
                            <p>{language === 'EN' ? <>Content can not only be viewed, but also saved. It doesn't matter what gadget you use to do it. You can
                                save photos and videos in
                                good quality to your smartphone or tablet as well as to your laptop or computer. Now you don't have to worry that you won't be
                                able to save something important.</> : <>Контент можно не только просматривать, но и сохранять. Неважно, какой гаджет вы
                                используете для этого. Вы можете сохранять фото и видео в
                                хорошего качества на ваш смартфон или планшет, а также на ноутбук или компьютер. Теперь вам не нужно беспокоиться о том, что вы
                                не будете
                                возможность сохранить что-то важное.</>}</p>
                        </div>
                    </div>
                    <div className={style.tile}>
                        <div className={style.tileContainer}>
                            <p>{language === 'EN' ? <>With the help of the web service you can check and download the history, highlights, publications, avatars from Instagram. Reading
                                and downloading is only possible from public pages.</> : <>С помощью веб-сервиса вы можете проверить и скачать историю, хайлайты, публикации, аватарки из Instagram. Чтение
                                и скачивание возможно только с общедоступных страниц.</>}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
