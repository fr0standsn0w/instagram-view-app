import React from 'react';
import Request from "../../components/request/request";
import FirstBlock from "./firstBlock/FirstBlock";
import Benefits from "./benefits/Benefits";
import Faq from "./faq/faq";

const Home = () => {
    return (
        <>
            <Request/>
            <FirstBlock/>
            <Benefits/>
            <Faq/>
        </>
    );
};

export default Home;
