import { Routes } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'users',
        component: ListUserComponent
    },
    {
        path: 'add',
        component: AddEditUserComponent
    },
    {
        path: 'edit/:id',
        component: AddEditUserComponent
    },
    {
        path: '**',
        redirectTo: '', pathMatch: 'full'
    },
];
