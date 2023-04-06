import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8085';
  constructor(private http: HttpClient,private router:Router) { }

  login(data:any){
    this.http.post("http://localhost:8085/login",data).subscribe((result:any) =>{
      localStorage.setItem("token",result.token);
      this.router.navigate(['/profile']);
    })
  }
  profile(){
    let headers = new HttpHeaders()
      .set("Authorization",`bearer ${localStorage.getItem('token')}`)
    this.http.post("http://localhost:8085/profile",{},{headers}).subscribe((result:any) =>{
    }, error => {
      if (error.status === 401) {
        this.router.navigate(['/login']);
      }
    });
  }
  

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

  

