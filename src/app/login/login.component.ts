import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  onSubmit(data){
    this.http.post("http://localhost:5000/login",data)
    .subscribe((res)=>{
      console.warn(res);
    })
  }

  showRegistration(){
    document.getElementById('registrationform').style.display = "block";
    document.getElementById('loginForm').style.display = "none";
  }

  ngOnInit(): void {
  }
  orderimg:string="assets/compra-en-linea.svg";
}
