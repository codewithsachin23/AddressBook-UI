import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AddressBookService } from '../../services/address-book.service';
import e from 'express';

@Component({
  selector: 'app-address-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css'
})
export class AddressListComponent {
persons:any[]=[];
  constructor(private addressBook:AddressBookService, private router: Router){
  
  }

  ngOnInit():void{
  this.addressBook.getAllPerson().subscribe({
  next:(data:any)=>{
    this.persons=data;
  },
  error:(err)=>{
    console.log(err);
  },
  complete:()=>{
    console.log("Data fetch completed");
  }

})

}

edit(id:number){
  this.router.navigate(['/edit', id]);
}

deleteDetails(id:number){
  this.addressBook.deleteDetails(id).subscribe({
    next: () => {
      alert("Person deleted successfully!");
      this.persons = this.persons.filter(person => person.id !== id); // Remove from UI
    },
    error: (err) => {
      console.error("Error deleting person:", err);
    }
  })
}
  }

