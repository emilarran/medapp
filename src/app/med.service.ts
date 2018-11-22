import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Doctor } from './doctor';
import { MedicalRecord } from './medical-record';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application-json' })
};

@Injectable({
  providedIn: 'root'
})
export class MedService {

  private apiUrl = ''; // place API URL here

  registerDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, doctor, httpOptions).pipe(
      catchError(this.handleError<Doctor>('registerDoctor'))
    );
  }

  addMedRecord(medRecord: MedicalRecord): Observable<MedicalRecord> {
    return this.http.post<MedicalRecord>(this.apiUrl, medRecord, httpOptions).pipe(
      catchError(this.handleError<MedicalRecord>('addMedRecord'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    console.log(`MedService error: ${message}`);
  }

  constructor(
    private http: HttpClient) { }
}
