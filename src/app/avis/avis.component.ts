import { Component, OnInit } from '@angular/core';
import { AvisService } from '../services/avis.service';
import { Avis } from '../models/avis';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit{

  avisS!:any[];
  avis:Avis=new Avis(); 
  utilisateurs: Utilisateur[] = [];
  constructor(private avisService:AvisService){
  }
  ngOnInit(): void {
    this.findAllAvisS();
  }
  findAllAvisS(){

    this.avisService.findAll().subscribe(data => {this.avisS = data});
  }
  saveAvis(){
    this.avisService.save(this.avis).subscribe(
      () => {
        this.findAllAvisS();
        this.avis = new Avis();
      }
    )
  }
  deleteAvis(id:number){
    this.avisService.delete(id).subscribe(
      () => {
        this.findAllAvisS();
      }
    )
  }
}