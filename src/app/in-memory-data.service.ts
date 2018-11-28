import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const doctors = [
      { id: 1, email: 'kobeboy@gmail.com', firstname: 'Kobe', lastname: 'Michael' },
      { id: 2, email: 'someguy@gmail.com', firstname: 'John', lastname: 'Doe' },
    ];

    const patients = [
      { id: 1, email: 'anotherguy@gmail.com', firstname: 'Angelo', lastname: 'Montil' },
      { id: 2, email: 'someone@gmail.com', firstname: 'John Matthew', lastname: 'Flowers' },
    ];

    const medicines = [
      { id: 1, name: 'Biogesic', price: 10, manufacturer: 'ImongMamaCorp' },
      { id: 2, name: 'Ventolin', price: 15, manufacturer: 'ImongMamaCorp' },
    ];

    const diseases = [
      { id: 1, name: 'Cough'},
      { id: 2, name: 'Headache'},
    ];

    const medicalrecords = [
      { id: 1, patient: patients[0], doctor: doctors[1], disease: diseases[1], medicine: medicines[0], totalBill: 100},
      { id: 2, patient: patients[1], doctor: doctors[0], disease: diseases[0], medicine: medicines[1], totalBill: 150},
    ];

    return {doctors, patients, medicines, diseases, medicalrecords};
  }

  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}