import { Patient } from './patient';
import { Disease } from './disease';
import { Doctor } from './doctor';
import { Medicine } from './medicine';

export class MedicalRecord {
    id: number;
    patient: Patient;
    doctor: Doctor;
    disease: Disease;
    medicine: Medicine;
    totalBill: number;
    // admission: Date;
    // discharge: Date;
}