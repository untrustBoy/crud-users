import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'any'
})
export class UserService {
  private myAppUrl: string = ""
  private myAp1Url: string = ""

  constructor(private http:HttpClient) { 
    this.myAppUrl = "http://localhost:3000/"
    this.myAp1Url = "api/users/"
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.myAppUrl}${this.myAp1Url}`)      
  }

  deleteUser(id?:number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myAp1Url}${id}`)   
  }
  
  saveUser(body: User): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myAp1Url}`, body)
  }

  getUser(id?:number): Observable<User>{
    return this.http.get<User>(`${this.myAppUrl}${this.myAp1Url}${id}`)   
  }

  editUser(id?:number ,user?:User): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myAp1Url}${id}`, user)   
  }
}
