import React, {useState} from 'react';
import './App.css';
import Header from "./components/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "./redux/languageSlice";
import {Navigate, redirect, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ProfilePage from "./pages/profile/profilePage";
import {IRootState} from "./redux/store";


const languageOptions = [
    {key: "English", text: "EN", value: "EN"},
    {key: "Russian", text: "RU", value: "RU"}
];


export const LanguageToggle = () => {
    const dispatch = useDispatch()
    const [language, setLanguageLocal] = useState('EN')
    dispatch(setLanguage(language))
    return (
        <>
            <p>{language}</p>
            {languageOptions.map(el => <p key={el.key} onClick={() => setLanguageLocal(el.value)}>{el.text}</p>)}
        </>
    );
}

const App = () => {
    const isUser = useSelector((state: IRootState) => state.profile.data)
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/profile'} element={Object.keys(isUser).length > 1 ? <ProfilePage/> : <Home/>}/>
                {/*<Route path={'/profile'} element={<ProfilePage/>}/>*/}
                <Route path={"*"} element={<Navigate to={"/"}/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
