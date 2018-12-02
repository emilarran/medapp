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

  medicine: Medicine = {
    id: null,
    name: null,
    price: null,
    manufacturer: null
  };

  addMedicine(): void {
    this.medicine.id = this.medicines[this.medicines.length-1].id + 1;
    this.medService.addMedicine(this.medicine as Medicine).subscribe(medicine => {
      this.medicines.push(medicine);
    });
    this.resetMedicine();
  }

  resetMedicine(): void {
    this.medicine.id = null;
    this.medicine.name = null;
    this.medicine.price = null;
    this.medicine.manufacturer = null;
  }

  deleteMedicine(index: number): void {
    let toBeDeleted = this.medicines[index];
    this.medicines = this.medicines.filter(h => h !== toBeDeleted);
    this.medService.deleteMedicine(toBeDeleted).subscribe();
  }

  selectedMedicine: Medicine = {
    id: null,
    name: null,
    price: null,
    manufacturer: null
  };

  selectMedicine(index: number): void {
    this.selectedMedicine = this.medicines[index];
  }

  editMedicine(): void {
    this.medService.updateMedicine(this.selectedMedicine).subscribe();
  }
}
