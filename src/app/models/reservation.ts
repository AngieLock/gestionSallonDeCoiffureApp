import { Utilisateur } from "./utilisateur";

export class Reservation {
    idReservation!:number;
    dateResa!:Date;
    salons!:Salon[];
    prestations!:Prestation[];
    idUtilisateur!:Utilisateur
}
