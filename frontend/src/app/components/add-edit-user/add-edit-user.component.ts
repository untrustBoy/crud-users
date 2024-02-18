import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ProgressBarComponent],
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.css'
})
export class AddEditUserComponent {

  form: FormGroup;
  loading: boolean=false
  idEdit: number = 0
  op: string = "Agregar"

  constructor(private fb:FormBuilder, private _userService:UserService, private router:Router, private aRoute:ActivatedRoute){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      telefono: ['', Validators.required],
    })
    this.idEdit = Number(aRoute.snapshot.paramMap.get('id'))
  }

  ngOnInit(){
    if(this.idEdit != 0){
      this.op = "Editar";
      this.getUser(this.idEdit);
    }
  }

  addUser(){
    console.log(this.form);
    
    const user:User = {
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      edad: this.form.get('edad')?.value,
      telefono: this.form.get('telefono')?.value,
    }
    
    this.loading = true
    if(this.idEdit != 0){
      user.id = this.idEdit
      this._userService.editUser(this.idEdit, user).subscribe(()=>{
        console.log('Usuario Actualizado');      
        this.loading = false
        this.router.navigate(['/'])
      })
    }else{
      this._userService.saveUser(user).subscribe(()=>{
        console.log('Usuario agregado');      
        this.loading = false
        this.router.navigate(['/'])
      })
    }
    
  }

  getUser(id:number){
    this.loading = true;
    this._userService.getUser(id)
    .subscribe((data:User)=>{
      console.log(data);
      this.loading = false;

      this.form.patchValue({
        nombre: data.nombre,
        apellido: data.apellido,
        edad: data.edad,
        telefono: data.telefono
      })
        
      })
  }

}
