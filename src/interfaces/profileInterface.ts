import {ProfileInfoI} from "./profileInfoInterface";

export interface ProfileI {
    cache?: ProfileMediaI;
    highlights?: {};
    posts?: {};
    ig_info?: ProfileInfoI;
}

interface ProfileMediaI {
    profile_pic?: string;
    highlights?: [{
        cover_media?: string;
        title?: string;
        media_count?: number
    }];
    posts?: any
}
