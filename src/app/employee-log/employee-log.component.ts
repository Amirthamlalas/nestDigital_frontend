import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-log',
  templateUrl: './employee-log.component.html',
  styleUrls: ['./employee-log.component.css']
})
export class EmployeeLogComponent {
constructor(private api:ApiService){

  api.viewEmployeelog().subscribe(
    (response:any)=>{
      this.data=response;
    }
  )
}

data:any=[]
}
