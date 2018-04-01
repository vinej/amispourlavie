import Pet from "./pet"
import Owner from "./owner"

export default class MyAds {
    id :  string = "";
    email: string = "";
    submit_date: Date;
    price: number = 0;
    pet: Pet = new Pet();
}
