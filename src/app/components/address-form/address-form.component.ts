import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { FormsModule } from '@angular/forms';
import { AddressBookService } from '../../services/address-book.service';
import { ActivatedRoute, Router,RouterLink } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css'
})
export class AddressFormComponent {
  contactData={
      name: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: ''
  }

  successMessage = '';
  successMessageforUpdate = '';

  isEditMode = false;
  personId!: number;  

constructor(private addressBook:AddressBookService, private route: ActivatedRoute,private router: Router ){

}
ngOnInit():void{
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    if (id) {
      this.isEditMode = true;
      this.personId = +id; // Convert to number
      this.loadPersonDetails(this.personId);
    }
  });
}
loadPersonDetails(id: number): void {
  this.addressBook.getPersonById(id).subscribe({
    next: (person: any) => {
      this.contactData = person; // Fill form with existing data
    },
    error: (err) => console.error('Error fetching details:', err)
  });
}

doSubmit(){
  this.successMessage = ''; 
  this.successMessageforUpdate='';
  if (this.isEditMode) {
    // Update existing record
    this.addressBook.updatePerson(this.personId, this.contactData).subscribe({
      next: () => {
        this.successMessageforUpdate = 'Record updated successfully!';
        this.router.navigate(['/viewAddress']); // Redirect to list
      },
      error: (err) => console.error('Error updating record:', err)
    });
  } else {
    // Create new record
    this.addressBook.createContact(this.contactData).subscribe({
      next: () => {
        this.successMessage = 'Record added successfully!';
        this.router.navigate(['/viewAddress']); // Redirect to list
      },
      error: (err) => console.error('Error adding record:', err)
    });
  }
}

}