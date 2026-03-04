import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color',
  imports: [CommonModule, FormsModule],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
  listeCouleurs = ['blue', 'red', 'green', 'yellow', 'black', 'white'];

  couleur: string = 'blue';
  /*
  <select>
    <option>blue</option>
    <option>red</option>
    <option>green</option>
    <option>yellow</option>
    <option>black</option>
    <option>white</option>
  </select>
*/
  message: string = 'Quelque valeur au carrée';
  valeur: number[] = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
  nouvelleValeur: number = 0;

  onAjoutNouvelleValeur() {
    this.valeur.push(this.nouvelleValeur);
  }
}
