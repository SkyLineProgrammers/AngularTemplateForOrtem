import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesHelperService {


  configUrl = "http://3.14.65.153/api/";
  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Response | any> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1", this.options);
  }

  getLogin(email, password): Observable<Response | any> {
    const body = { email: email, password: password }
    return this.http.post(this.configUrl + "loginUser", body, this.options)
  }


  getSignUp(full_name, email, password, password_confirmation): Observable<Response | any> {
    const body = { full_name: full_name, email: email, password: password, password_confirmation: password_confirmation }
    return this.http.post(this.configUrl + "registerUser", body, this.options)
  }



}
