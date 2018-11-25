import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Doctor } from './doctor';
import { MedicalRecord } from './medical-record';
import { Patient } from './patient';
import { Disease } from './disease';
import { Medicine } from './medicine';

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
      catchError(this.handleError<MedicalRecord>('deleteMedRecord'))
    );
  }

  deletePatient(patient: Patient | number): Observable<Patient> {
    const id = typeof patient === 'number' ? patient: patient.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Patient>(url, httpOptions).pipe(
      catchError(this.handleError<Patient>('deletePatient'))
    );
  }

  addDisease(disease: Disease): Observable<Disease> {
    return this.http.post<Disease>(this.apiUrl, disease, httpOptions).pipe(
      catchError(this.handleError<Disease>('addDisease'))
    );
  }

  updateDisease(disease: Disease): Observable<any> {
    return this.http.put(this.apiUrl, disease, httpOptions).pipe(
      catchError(this.handleError<any>('updateDisease'))
    );
  }

  deleteDisease(disease: Disease | number): Observable<Disease> {
    const id = typeof disease === 'number' ? disease: disease.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Disease>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted disease id=${id}`)),
      catchError(this.handleError<Disease>('deleteDisease'))
    );
  }

  getDiseases(): Observable<Disease[]> {
    return this.http.get<Disease[]>(this.apiUrl).pipe(
      catchError(this.handleError('getDiseases', []))
    );
  }

  addMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(this.apiUrl, medicine, httpOptions).pipe(
      catchError(this.handleError<Medicine>('addMedicine'))
    );
  }

  updateMedicine(medicine: Medicine): Observable<any> {
    return this.http.put(this.apiUrl, medicine, httpOptions).pipe(
      catchError(this.handleError<any>('updateMedicine'))
    );
  }

  deleteMedicine(medicine: Medicine | number): Observable<Medicine> {
    const id = typeof medicine === 'number' ? medicine: medicine.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Medicine>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted medicine id=${id}`)),
      catchError(this.handleError<Medicine>('deleteMedicine'))
    );
  }

  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiUrl).pipe(
      catchError(this.handleError('getMedicines', []))
    );
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl).pipe(
      catchError(this.handleError('getPatients', []))
    );
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl).pipe(
      catchError(this.handleError('getDoctors', []))
    );
  }

  getMedRecords(): Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(this.apiUrl).pipe(
      catchError(this.handleError('getMedRecords', []))
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
