import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent {
  constructor(private api:ApiService){

    api.viewLeave().subscribe(

      (response:any)=>{
        this.data=response;
        
      }
    )
  }
  data:any=[]

  statusvalue:any={}
  acceptValue=(dat:any,id:any)=>{
    this.statusvalue=1;
   
    let accept:any={"empid":dat,"status":this.statusvalue,"id":id}
    localStorage.setItem("statusval",this.statusvalue)
    this.api.updateStatus(accept).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          console.log(response)
          console.log(response.status)
          alert("status value changed successfully")
          
        } else {
          alert("failed")
        }
      }
    )
  }

  rejectValue=(dat:any,id:any)=>{
    this.statusvalue=-1;
    let accept:any={"empid":dat,"status":this.statusvalue,"id":id}
    localStorage.setItem("statusval",this.statusvalue)
    this.api.updateStatus(accept).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          console.log(response)
          console.log(response.status)
          alert("status value changed successfully")
          
        } else {
          alert("failed")
        }
      }
    )
  }

}
