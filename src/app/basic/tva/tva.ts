import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tva',
  imports: [FormsModule, CommonModule],
  templateUrl: './tva.html',
  styleUrl: './tva.css',
})
export class Tva {

  montantHt: number = 0;
  tauxTva: number = 5;
  tauxDisponibles: number[] = [5, 10, 20];
  tva: number = 0;
  ttc: number = 0;

  onAffiche() {
    this.tva = this.montantHt * (this.tauxTva/100);
    this.ttc = this.montantHt + this.tva;
  }

}

