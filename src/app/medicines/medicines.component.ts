import { Component, OnInit } from '@angular/core';
import { MedService } from '../med.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
  medicines: Medicine[];

  getMedicines(): void {
    this.medService.getMedicines().subscribe(medicines => this.medicines = medicines);
  }

  constructor(private medService: MedService) { }

  ngOnInit() {
    this.getMedicines();
  }

}
