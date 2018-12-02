import { Component, OnInit } from '@angular/core';
import { MedService } from '../med.service';
import { Disease } from '../disease';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {
  diseases: Disease[];

  getDiseases(): void {
    this.medService.getDiseases().subscribe(diseases => this.diseases = diseases);
  }

  medicines: Medicine[];

  getMedicines(): void {
    this.medService.getMedicines().subscribe(medicines => this.medicines = medicines);
  }

  constructor(private medService: MedService) { }

  ngOnInit() {
      this.getDiseases();
      this.getMedicines();
  }

  disease: Disease = {
    id: null,
    name: null,
    medicines: []
  };

  addDisease(id: number): void {
    this.disease.id = this.diseases[this.diseases.length-1].id + 1;
    this.disease.medicines.pop();
    this.disease.medicines.push(this.medicines[id]);
    console.log(this.disease);
    this.medService.addDisease(this.disease as Disease).subscribe(disease => {
      this.diseases.push(disease);
    });
    this.resetDisease();
  }

  resetDisease(): void {
    this.disease.id = null;
    this.disease.name = null;
    this.disease.medicines = [];
  }

  deleteDisease(index: number): void {
    let toBeDeleted = this.diseases[index];
    this.diseases = this.diseases.filter(h => h !== toBeDeleted);
    this.medService.deleteDisease(toBeDeleted).subscribe();
  }

  selectedDisease: Disease = {
    id: null,
    name: null,
    medicines: []
  };

  selectDisease(index: number): void {
    this.selectedDisease = this.diseases[index];
  }

  editDisease(index: number): void {
    this.selectedDisease.medicines.pop();
    this.selectedDisease.medicines.push(this.medicines[index]);
    this.medService.updateDisease(this.selectedDisease).subscribe();
  }
}
