import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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

  private doctorsUrl = 'api/doctors'; // place API URL here
  private patientsUrl = 'api/patients';
  private medicinesUrl = 'api/medicines';
  private diseasesUrl = 'api/diseases';
  private medicalrecordsUrl = 'api/medicalrecords';

  registerDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.doctorsUrl, doctor, httpOptions).pipe(
      catchError(this.handleError<Doctor>('registerDoctor'))
    );
  }

  addMedRecord(medRecord: MedicalRecord): Observable<MedicalRecord> {
    return this.http.post<MedicalRecord>(this.medicalrecordsUrl, medRecord, httpOptions).pipe(
      catchError(this.handleError<MedicalRecord>('addMedRecord'))
    );
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientsUrl, patient, httpOptions).pipe(
      catchError(this.handleError<Patient>('addPatient'))
    );
  }

  getMedRecord(id: number): Observable<MedicalRecord> {
    const url = `${this.medicalrecordsUrl}/${id}`;
    return this.http.get<MedicalRecord>(url).pipe(
      catchError(this.handleError<MedicalRecord>(`getMedRecord id=${id}`))
    );
  }

  updateMedRecord(medRecord: MedicalRecord): Observable<any> {
    return this.http.put(this.medicalrecordsUrl, medRecord, httpOptions).pipe(
      catchError(this.handleError<any>('updateMedRecord'))
    );
  }

  updatePatient(patient: Patient): Observable<any> {
    return this.http.put(this.patientsUrl, patient, httpOptions).pipe(
      catchError(this.handleError<any>('updatePatient'))
    );
  }

  updateDoctor(doctor: Doctor): Observable<any> {
    return this.http.put(this.doctorsUrl, doctor, httpOptions).pipe(
      catchError(this.handleError<any>('updateDoctor'))
    );
  }

  deleteMedRecord(medRecord: MedicalRecord | number): Observable<MedicalRecord> {
    const id = typeof medRecord === 'number' ? medRecord: medRecord.id;
    const url = `${this.medicalrecordsUrl}/${id}`;

    return this.http.delete<MedicalRecord>(url, httpOptions).pipe(
      catchError(this.handleError<MedicalRecord>('deleteMedRecord'))
    );
  }

  deletePatient(patient: Patient | number): Observable<Patient> {
    const id = typeof patient === 'number' ? patient: patient.id;
    const url = `${this.patientsUrl}/${id}`;

    return this.http.delete<Patient>(url, httpOptions).pipe(
      catchError(this.handleError<Patient>('deletePatient'))
    );
  }

  addDisease(disease: Disease): Observable<Disease> {
    return this.http.post<Disease>(this.diseasesUrl, disease, httpOptions).pipe(
      catchError(this.handleError<Disease>('addDisease'))
    );
  }

  updateDisease(disease: Disease): Observable<any> {
    return this.http.put(this.diseasesUrl, disease, httpOptions).pipe(
      catchError(this.handleError<any>('updateDisease'))
    );
  }

  deleteDisease(disease: Disease | number): Observable<Disease> {
    const id = typeof disease === 'number' ? disease: disease.id;
    const url = `${this.diseasesUrl}/${id}`;

    return this.http.delete<Disease>(url, httpOptions).pipe(
      catchError(this.handleError<Disease>('deleteDisease'))
    );
  }

  getDiseases(): Observable<Disease[]> {
    return this.http.get<Disease[]>(this.diseasesUrl).pipe(
      catchError(this.handleError('getDiseases', []))
    );
  }

  addMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(this.medicinesUrl, medicine, httpOptions).pipe(
      catchError(this.handleError<Medicine>('addMedicine'))
    );
  }

  updateMedicine(medicine: Medicine): Observable<any> {
    return this.http.put(this.medicinesUrl, medicine, httpOptions).pipe(
      catchError(this.handleError<any>('updateMedicine'))
    );
  }

  deleteMedicine(medicine: Medicine | number): Observable<Medicine> {
    const id = typeof medicine === 'number' ? medicine: medicine.id;
    const url = `${this.medicinesUrl}/${id}`;

    return this.http.delete<Medicine>(url, httpOptions).pipe(
      catchError(this.handleError<Medicine>('deleteMedicine'))
    );
  }

  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.medicinesUrl).pipe(
      catchError(this.handleError('getMedicines', []))
    );
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl).pipe(
      catchError(this.handleError('getPatients', []))
    );
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorsUrl).pipe(
      catchError(this.handleError('getDoctors', []))
    );
  }

  getMedRecords(): Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(this.medicalrecordsUrl).pipe(
      catchError(this.handleError('getMedRecords', []))
    );
  }

  searchDiseases(term: string): Observable<Disease[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Disease[]>(`${this.diseasesUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Disease[]>('searchDiseases', []))
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
