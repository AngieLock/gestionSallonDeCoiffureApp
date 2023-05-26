import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

  reservations!:any[];
  user:Reservation=new Reservation(); 
  constructor(private reservationService:ReservationService){
  }
  ngOnInit(): void {
    this.findAllReservations();
  }
  findAllReservations(){
    this.reservationService.findAll().subscribe(data => {this.reservations = data});
  }
  saveReservation(){
    this.reservationService.save(this.user).subscribe(
      () => {
        this.findAllReservations();
        this.user = new Reservation();
      }
    )
  }
  deleteReservation(id:number){
    this.reservationService.delete(id).subscribe(
      () => {
        this.findAllReservations();
      }
    )
  }
}