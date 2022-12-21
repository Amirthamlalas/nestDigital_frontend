import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-guard',
  templateUrl: './security-guard.component.html',
  styleUrls: ['./security-guard.component.css']
})
export class SecurityGuardComponent {

  username=""
  password=""
  name=""
  constructor(private api:ApiService){}
  readValue=()=>{
    let data:any={
      "username":this.username,"password":this.password,"name":this.name
    }
    console.log(data)
  this.api.addSecurity(data).subscribe(
    (response:any)=>{
      if (response.status=="success") {
        alert("security guard added successfully")
        this.username=""
        this.password=""
        this.name=""
        
      } else {
        alert("Something went wrong")
      }
    }
  )
  }

}
