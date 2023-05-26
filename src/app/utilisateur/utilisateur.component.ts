import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{

  users!:any[];
  user:Utilisateur=new Utilisateur(); 
  constructor(private utilisateurService:UtilisateurService){
  }
  ngOnInit(): void {
    this.findAllUtilisateurs();
  }
  findAllUtilisateurs(){
    this.utilisateurService.findAll().subscribe(data => {this.users = data});
  }
  saveUtilisateur(){
    this.utilisateurService.save(this.user).subscribe(
      () => {
        this.findAllUtilisateurs();
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
