import React from 'react';
import style from './style.module.scss';

const Benefits = () => {
    return (
        <div className={style.benefitsContainer}>
            <div className={style.benefitsBody}>
                <h2>Benefits</h2>
                <div className={style.tiles}>
                    <div className={style.tile}>
                        <div className={style.tileContainer}>
                            <h3>No account, no registration</h3>
                            <p>Everyone can use the service. Not only do you not need to have a social network profile, but you also do not need to install any
                                additional software. Everything can be done through your browser page.</p>
                        </div>
                    </div>
                    <div className={style.tile}>
                        <div className={style.tileContainer}>
                            <h3>No one will know you are active</h3>
                            <p>You can do anything and watch anyone you want. Our service makes your presence invisible to other account holders.</p>
                        </div>
                    </div>
                    <div className={style.tile}>
                        <div className={style.tileContainer}>
                            <h3>Downloadable content</h3>
                            <p>Content can not only be viewed, but also saved. It doesn't matter what gadget you use to do it. You can save photos and videos in
                                good quality to your smartphone or tablet as well as to your laptop or computer. Now you don't have to worry that you won't be
                                able to save something important</p>
                        </div>
                    </div>
                    <div className={style.tile}>
                        <div className={style.tileContainer}>
                            <p>With the help of the web service you can check and download the history, highlites, publications, avatars from Instagram. Reading and downloading is only possible from public pages.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
