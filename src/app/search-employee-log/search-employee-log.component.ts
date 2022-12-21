import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee-log',
  templateUrl: './search-employee-log.component.html',
  styleUrls: ['./search-employee-log.component.css']
})
export class SearchEmployeeLogComponent {
  constructor(private api:ApiService){}
date=""

searchdata:any=[]
readValue=()=>{
  let data:any={"date":this.date}

  this.api.searchEmployeelog(data).subscribe(
    (response:any)=>{
      this.searchdata=response;
      console.log(response)
    }
  )

}

  

}
