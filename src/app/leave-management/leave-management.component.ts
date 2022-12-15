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

}
