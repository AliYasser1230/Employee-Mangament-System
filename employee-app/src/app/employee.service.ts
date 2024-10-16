import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    private apiUrl = 'http://localhost:3000/api'; 

    constructor(private http: HttpClient) {}

  
    getEmployees(): Observable<any> {
        return this.http.get(`${this.apiUrl}/employees`);
    }

    addEmployee(employee: any): Observable<any> {
      console.log('New Employee being sent:', employee);

      return this.http.post(`${this.apiUrl}/addEmployee`, employee);
      
    }
}
