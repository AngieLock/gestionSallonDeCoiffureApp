import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit{

  avisS!:any[];
  avis:Avis=new Avis(); 
  // DI : par constructeur  
  constructor(private avisService:AvisService){
  }
  ngOnInit(): void {
    this.findAllAvis();
  }
  findAllUtilisateurs(){
    // utilisation expression lambda 
    // data sont les données qui sont dans le cache du navigateur
    this.avisService.findAll().subscribe(data => {this.avisS = data});
  }
  saveAvis(){
    this.avisService.save(this.avis).subscribe(
      () => {
        this.findAllAvis();
        this.avis = new Avis();
      }
    )
  }
  deleteAvis(id:number){
    this.avisService.delete(id).subscribe(
      () => {
        this.findAllAvis();
      }
    )
  }
}