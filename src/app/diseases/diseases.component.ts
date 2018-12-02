import { Component, OnInit } from '@angular/core';
import { MedService } from '../med.service';
import { Disease } from '../disease';

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

  constructor(private medService: MedService) { }

  ngOnInit() {
      this.getDiseases();
  }

}
