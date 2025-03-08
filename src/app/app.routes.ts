import { Routes } from '@angular/router';
import { AddressFormComponent } from "./components/address-form/address-form.component";
import { AddressListComponent } from './components/address-list/address-list.component';
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:"full"

    },
    {
        path:'create',
        component:AddressFormComponent,
        pathMatch:"full"

    },
    {
        path:'viewAddress',
        component:AddressListComponent,
        pathMatch:"full"

    },
    {
        path:'edit/:id',
        component:AddressFormComponent,
        pathMatch:"full"

    }
];
