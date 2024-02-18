import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, RouterModule, ProgressBarComponent],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{

  listUser: User[] = []
  loading: boolean = false

  constructor(private _userService:UserService){

  }

  ngOnInit(){
    this.getAllUser()
  }

  getAllUser(){
    this.loading = true
    this._userService.getAllUsers()
    .subscribe((data:User[])=>{
      this.listUser = data
      console.log(data);        
      this.loading = false
      })
  }

  deleteProduct(id?:number){
    this.loading = true
    this._userService.deleteUser(id)
      .subscribe(()=>{
        this.getAllUser();    
      })
  }

}
