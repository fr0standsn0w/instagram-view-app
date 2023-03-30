import React from 'react';
import Request from "../../components/request/request";
import FirstBlock from "./firstBlock/FirstBlock";
import Benefits from "./benefits/Benefits";
import Faq from "./faq/faq";
import {useSelector} from "react-redux";
import {IRootState} from "../../redux/store";

const Home = () => {
    const language = useSelector((state:IRootState) => state.language.data)
    return (
        <>
            <Request/>
            <FirstBlock language={language}/>
            <Benefits language={language}/>
            <Faq language={language}/>
        </>
    );
};

export default Home;
