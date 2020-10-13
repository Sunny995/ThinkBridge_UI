import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars=[];
  selectedItem={};
  constructor(private route: Router,public service : CarService) { }

  ngOnInit(): void {
    this.service.getCars()
    .subscribe(data =>  {
         this.cars = Object.assign([], data);
         sessionStorage.setItem('lastid',this.cars[this.cars.length-1].id.toString());
      });

  }


}
