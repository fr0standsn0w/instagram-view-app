import React from 'react';
import Request from "../../components/request/request";
import ProfileInfo from "./profileInfo/profileInfo";
import Highlights from "./highlights/highlights";
import Publications from "./publications/publications";

const ProfilePage = () => {
    return (
        <>
            <Request/>
            <ProfileInfo/>
            <Highlights/>
            <Publications/>
        </>
    );
};

export default ProfilePage;
