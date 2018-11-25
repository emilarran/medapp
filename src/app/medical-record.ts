import { Patient } from './patient';
import { Disease } from './disease';

export class MedicalRecord {
    id: number;
    patient: Patient;
    disease: Disease;
    totalBill: number;
    admission: Date;
    discharge: Date;
}