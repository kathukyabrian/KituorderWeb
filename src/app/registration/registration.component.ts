import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http:HttpClient) { }

  onSubmit(data){
    
    this.http.post("http://127.0.0.1:5000/register",data)
    .subscribe((res)=>{
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

}
