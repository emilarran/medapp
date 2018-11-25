import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Doctor } from './doctor';
import { MedicalRecord } from './medical-record';
import { Patient } from './patient';

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

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient, httpOptions).pipe(
      catchError(this.handleError<Patient>('addPatient'))
    );
  }

  getMedRecord(id: number): Observable<MedicalRecord> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<MedicalRecord>(url).pipe(
      catchError(this.handleError<MedicalRecord>(`getMedRecord id=${id}`))
    );
  }

  updateMedRecord(medRecord: MedicalRecord): Observable<any> {
    return this.http.put(this.apiUrl, medRecord, httpOptions).pipe(
      catchError(this.handleError<any>('updateMedRecord'))
    );
  }

  updatePatient(patient: Patient): Observable<any> {
    return this.http.put(this.apiUrl, patient, httpOptions).pipe(
      catchError(this.handleError<any>('updatePatient'))
    );
  }

  updateDoctor(doctor: Doctor): Observable<any> {
    return this.http.put(this.apiUrl, doctor, httpOptions).pipe(
      catchError(this.handleError<any>('updateDoctor'))
    );
  }

  deleteMedRecord(medRecord: MedicalRecord | number): Observable<MedicalRecord> {
    const id = typeof medRecord === 'number' ? medRecord: medRecord.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<MedicalRecord>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted medRecord id=${id}`)),
      catchError(this.handleError<MedicalRecord>('deleteMedRecord'))
    );
  }

  deletePatient(patient: Patient | number): Observable<Patient> {
    const id = typeof patient === 'number' ? patient: patient.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Patient>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted patient id=${id}`)),
      catchError(this.handleError<Patient>('deletePatient'))
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
