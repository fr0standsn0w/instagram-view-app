import React, {useEffect, useState} from 'react';
import style from './style.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {reset, setProfile} from "../../redux/profileSlice";
import {useNavigate} from "react-router-dom";
import {IRootState} from "../../redux/store";

const Request = () => {
    const language: string = useSelector((state: IRootState) => state.language.data)
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)
    const [response, setResponse] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    const [err, setErr] = useState<string>()
    const handleSubmit = async () => {
        if (!name) {
            setErr(()=> (language==='en' ? 'Paste name account' : 'Введите имя аккаунта'))
            return
        }
        await fetch(`https://api.instafile.net/getinst.php?nm=${name}&type=profile`)
            .then(res => res.json())
            .then(data => {
                setResponse(data)
                setLoading(false)
            })
            .catch((error:any) => {
                setErr(error)
                console.log(err)
            })
    }

    useEffect(() => {
        if (!loading) {
            dispatch(setProfile(response))
        }
    }, [dispatch, loading, response])

    return (
        <div className={style.requestContainer}>
            <div className={style.requestBody}>
                <div className={style.requestContent}>
                    <h1>OPEN INSTAGRAM PROFILE</h1>
                    <p>{language === 'EN' ? <>You can open profile and save content from instagram account. Paste the name of profile in instagram. Push the
                        button "reset" to reload
                        the page to load another account.</> : <>Вы можете открыть профиль и сохранить контент из учетной записи Instagram. Вставьте название
                        профиля в instagram. Нажмите кнопку «сброс», чтобы перезагрузить
                        страницу для загрузки другой учетной записи.</>}
                    </p>
                    <div className={style.searchElement}>
                        <label>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M33.6175 31.7641L26.5547 24.7163C29.0474 21.748 30.2982 17.9318 30.0461 14.0637C29.7941 10.1955 28.0587 6.57392 25.2019 3.95436C22.3451 1.33479 18.5875 -0.0805408 14.7128 0.00354295C10.838 0.0876267 7.14532 1.66463 4.40482 4.40566C1.66432 7.14669 0.0876099 10.8401 0.00354227 14.7156C-0.0805254 18.5911 1.33454 22.3494 3.9536 25.2067C6.57266 28.0641 10.1935 29.7998 14.061 30.0519C17.9284 30.304 21.7439 29.053 24.7116 26.5598L31.758 33.6239C32.0074 33.8652 32.3408 34 32.6878 34C33.0347 34 33.3681 33.8652 33.6175 33.6239C33.8625 33.3765 34 33.0423 34 32.694C34 32.3457 33.8625 32.0115 33.6175 31.7641ZM2.67504 15.0745C2.67504 12.6222 3.40209 10.225 4.76424 8.18601C6.12639 6.14702 8.06247 4.55782 10.3276 3.61937C12.5928 2.68092 15.0854 2.43538 17.49 2.9138C19.8947 3.39221 22.1036 4.5731 23.8373 6.30712C25.571 8.04114 26.7516 10.2504 27.23 12.6556C27.7083 15.0607 27.4628 17.5537 26.5245 19.8194C25.5863 22.085 23.9974 24.0214 21.9588 25.3838C19.9202 26.7462 17.5234 27.4734 15.0716 27.4734C11.7852 27.4691 8.63455 26.1614 6.31068 23.8371C3.98681 21.5128 2.67936 18.3616 2.67504 15.0745Z"
                                    fill="#6A6868"/>
                            </svg>
                        </label>
                        <input type="text" placeholder={language === 'EN' ? "Paste name account" : "Вставьте название учетной записи"} value={name}
                               onChange={handleChange}/>
                    </div>
                    <div className={style.buttonContainer}>
                        <button onClick={() => {
                            handleSubmit().then(() => {
                                navigation('/profile')
                            })
                        }}>Download
                        </button>
                        <button onClick={() => {
                            dispatch(reset())
                        }}>Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Request;
