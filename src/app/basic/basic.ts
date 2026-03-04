import { Component } from '@angular/core';
import { Calculatrice } from './calculatrice/calculatrice';
import { Color } from './color/color';
import { Produits } from './produits/produits';
import { Tva } from './tva/tva';
import { FormsModule } from '@angular/forms';

 
 

@Component({
  selector: 'app-basic',
  imports: [Calculatrice, Color, Produits, FormsModule, Tva],
  templateUrl: './basic.html',
  styleUrl: './basic.css',
})
export class Basic {
  username: string = '';
  message: string = "Vous n'avez pas encore saisi de nom.";
  ctp: number = 0;
  couleurButton: string = 'red';

  jeCreeUnEvenement() {
    this.ctp++;
    this.message = "Bonjour " + this.username + " ! J'ai cliqué " + this.ctp + " fois.";
  }
}
