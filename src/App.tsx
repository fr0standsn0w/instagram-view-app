import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ProfilePage from "./pages/profile/profilePage";
import {IRootState} from "./redux/store";

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
