import MyAds from "./myads"

export default class Owner {
    // user profile
    email: string = "";
    password: string = "";
    name: string = "";
    cie : string = "";
    address: string = "";
    city: string = "";
    state: string = "";
    phone: string = "";
    mobile: string;
    ads : MyAds[];
}
