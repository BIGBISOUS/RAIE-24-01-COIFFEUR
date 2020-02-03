import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rdv } from '../models/rdv';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  private server = 'http://localhost:3000/';
  constructor(private http: HttpClient) {   }

  public getRdvById(id) {
    return this.http.get(this.server + 'rdv/' + id);
  }

  public createRdv(rdv: Rdv){
    console.log(rdv);
    return this.http.post(this.server + 'rdv/', rdv);
  }

  public getAllRdv(){
    return this.http.get<Rdv[]>(this.server + 'rdv/').pipe(_rdv => { return _rdv});
  }
  
  public deleteRdvById(id) {
    return this.http.delete(`${this.server}rdv/${id}`);
  }
}
