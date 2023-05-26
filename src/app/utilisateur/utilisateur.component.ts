import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{
  // Déclaration d'un tableau d'utilisateurs
  // ! : le tableau n'est pas initialisé
  users!:any[];
  user:Utilisateur=new Utilisateur(); // any : n'importe quel type de données
  // DI : par constructeur  
  constructor(private utilisateurService:UtilisateurService){
  }
  ngOnInit(): void {
    this.findAllUtilisateurs();
  }
  findAllUtilisateurs(){
    // utilisation expression lambda 
    // data sont les données qui sont dans le cache du navigateur
    this.utilisateurService.findAll().subscribe(data => {this.users = data});
  }
  saveUtilisateur(){
    this.utilisateurService.save(this.user).subscribe(
      () => {
        // MAJ liste des utilisateurs
        this.findAllUtilisateurs();
        // Vider le formulaire
        this.user = new Utilisateur();
      }
    )
  }
  deleteUtilisateur(id:number){
    this.utilisateurService.delete(id).subscribe(
      () => {
        this.findAllUtilisateurs();
      }
    )
  }
}
