import Ads from "./ads"

export default class Owner {
    // user profile
    email: string = "";
    name: string = "";
    cie : string = "";
    address: string = "";
    city: string = "";
    state: string = "";
    phone: string = "";
    mobile: string;
    myads : Ads[];
}
