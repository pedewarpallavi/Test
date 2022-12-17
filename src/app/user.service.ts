import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user:{name:string,domain:string,gender:string,dob:string,phone:string,location:string} = 
  {name:"Jone Smith",domain:"www.mjhattorney.com", gender:"Male",dob:"08-16-1979",phone:"+9860319311",location:"12 street, Silicaon valley"}
  


updateUser(newuser:{name:string,domain:string,gender:string,dob:string,phone:string,location:string}){
  this.user = newuser;
  console.log(newuser)
}
  
}
