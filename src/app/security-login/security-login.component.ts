import { Component } from '@angular/core';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {

  username=""
  password=""

  readValue=()=>{
    let data:any={"username":this.username,"password":this.password}

    console.log(data)
  }

}
