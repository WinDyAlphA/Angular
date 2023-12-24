export class User {
    id: number = Math.floor(Math.random() * 1000);
    name!:string;
    email!:string;
    phone!:string;
    website!:string;
}