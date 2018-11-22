import { Patient } from './patient';

export class MedicalRecord {
    id: number;
    patient: Patient;
    totalBill: number;
    admission: Date;
    discharge: Date;
}