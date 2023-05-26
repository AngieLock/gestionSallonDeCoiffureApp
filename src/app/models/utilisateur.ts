import { Role } from "./role";

export class Utilisateur {
    idUtilisateur!:number;
    nomUtilisateur!:string;
    prenomUtilisateur!:string;
    login!:string;
    password!:string;
    dateNaissance!:Date;
    roles!:Role[];
}
