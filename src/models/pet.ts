import PetsType from "./petstype";
import Owner from "./owner"

export default class Pet {
    owner: Owner;
    name: string;
    breed: string;
    age: number;
    vaccination : string;
    registration: string;
    description : string;
    petstype: PetsType;
}
