import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  private baseurl="http://localhost:8080/addressBookApp";
  

  constructor(private http:HttpClient) { }
  createContact(contactData:any){
    return this.http.post<any>(`${this.baseurl}/create`,contactData);
  }
  getAllPerson(){
    return this.http.get(`${this.baseurl}/viewPerson`);
  }
  getPersonById(id: number) {
    return this.http.get(`${this.baseurl}/${id}`);
  }

  updatePerson(id: number, person: any) {
    return this.http.put(`${this.baseurl}/update/${id}`, person);
  }
  deleteDetails(id:number){
    return this.http.delete(`${this.baseurl}/delete/${id}`)
  }


}
