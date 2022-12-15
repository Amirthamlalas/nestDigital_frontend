import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  empid=""

constructor(private api:ApiService,private router:Router){}



searchData:any=[]

  readValue=()=>

  {

    let data:any={"empid":this.empid}

    console.log(data)

    this.api.searchEmployee(data).subscribe(

      (response:any)=>

      {

        console.log(response)

        if (response.length==0) {

          alert("Invalid emp id")

        } else {

          this.searchData=response;

        }

      }

    )

  }



  deleteBtnClick=(id:any)=>

  {

    let data:any={"id":id}

    this.api.deleteEmployee(data).subscribe(

      (response:any)=>

      {

        console.log(response)

        if (response.status=="success") {

          alert("employ deleted successfully")

          this.router.navigate(['/searchemployee'])

        } else {

          alert("can not delete")

        }

      }

    )

  }

}
