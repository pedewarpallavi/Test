
import { Component, } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import { UserService } from '../user.service';


@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent  {

  reactiveForm: FormGroup;  

  constructor(public dialog: MatDialog, private userservice:UserService ) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({

    
      name:new FormControl(null),

      domain : new FormControl(null,[Validators.required, Validators.email]),
      gender: new FormControl(null),
      dob: new FormControl(null),
      phone: new FormControl(null),
      location: new FormControl(null,),
    })

    this.reactiveForm.patchValue ({
      
    name: "Jone Smith",
    domain : "www.mjhattorney.com",
    gender: "Male",
    dob: "1990-12-01",
    phone: "9860319311",
    location: "12 street, Silicon valley"})
  }

    
UserObj : {name:string,domain:string,gender:string,dob:string,phone:string,location:string}
  
userFirstname:string[]



  onSubmit(){

    this.userservice.updateUser(this.reactiveForm.value);
    this.UserObj = this.reactiveForm.value

    console.log(this.reactiveForm.value)


   
}
}



