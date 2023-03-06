import React, {useState} from 'react';
import './App.css';
import Header from "./components/header/Header";
import {useDispatch} from "react-redux";
import {setLanguage} from "./redux/languageSlice";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";


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
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;
