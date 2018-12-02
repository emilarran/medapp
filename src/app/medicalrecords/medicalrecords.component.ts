import { Component, OnInit } from '@angular/core';
import { MedService } from '../med.service';
import { MedicalRecord } from '../medical-record';

@Component({
  selector: 'app-medicalrecords',
  templateUrl: './medicalrecords.component.html',
  styleUrls: ['./medicalrecords.component.css']
})
export class MedicalrecordsComponent implements OnInit {
  medicalrecords: MedicalRecord[];

  getMedRecords(): void {
    this.medService.getMedRecords().subscribe(medicalrecords => this.medicalrecords = medicalrecords);
  }

  constructor(private medService: MedService) { }

  ngOnInit() {
    this.getMedRecords();
  }

}
