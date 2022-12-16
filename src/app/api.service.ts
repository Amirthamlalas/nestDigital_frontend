import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addSecurity=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",DataToSend)
  }
  securityLogin=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/securitylogin",DataToSend)
  }

 visitorLog=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/visitorlog",DataToSend)
  }
  addEmployee=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/addemployee",DataToSend)
  }
  searchEmployee=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/searchemployee",DataToSend)
  }
  deleteEmployee=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/deleteemployee",DataToSend)
  }

  employeeLogin=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/employeelogin",DataToSend)
  }

  employeeProfile=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/viewprofile",DataToSend)
  }

  applyLeave=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/applyleave",DataToSend)
  }

  
  viewLeave=()=>{
    return this.http.get("http://localhost:8080/viewallleave")
  }

  viewEmployee=()=>{
    return this.http.get("http://localhost:8080/viewemployee")
  }

  updateStatus=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/update",DataToSend)
  }

 
  searchStatus=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/searchstatus",DataToSend)
  }
}
