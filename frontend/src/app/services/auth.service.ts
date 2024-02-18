import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'any'
})
export class AuthService {
  private myAppUrl: string = ""
  private auth: string = ""
  

  constructor(private http:HttpClient) { 
    this.myAppUrl = "http://localhost:3000/"
    this.auth = "auth/login"
  }

  login(user:string, pass:string):Observable<any>{
    const body ={
      "username":user,
      "password":pass
    }
    return this.http.post(`${this.myAppUrl}${this.auth}`, body)
  }
}
