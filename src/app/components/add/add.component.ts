import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CarService} from '../../services/book.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router,public service : CarService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({

      name: ['', Validators.required],
      price: ['', Validators.required],

    });
    
  }


  onSubmit(name: string, price: Float32Array): void {
    let id = parseInt(sessionStorage.getItem('lastid'));
   this.service.addCarInInventory({
     id:id+1,
     name: name,
     price: price
   }).subscribe(data => {
    console.log(data);
    this.route.navigateByUrl('/home');
        });
        
  }
}
