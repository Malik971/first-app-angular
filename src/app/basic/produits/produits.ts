import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduit } from '../../common/iproduit';

@Component({
  selector: 'app-produits',
  imports: [CommonModule, FormsModule],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {

  listeCategories: string[] = ["bd", "Jeu vidéo", "other"];
  mapCategorieProduits = new Map<string, IProduit[]>();
  categorie: string = "";
  listeProduits: IProduit[] = [];

  onCate(categorieChoix : string){
    this.categorie = categorieChoix;
    console.log("categorieChoisie=" + this.categorie);
    this.listeProduits = this.mapCategorieProduits.get(this.categorie) ?? [];
    console.log("listeProduits=" + JSON.stringify(this.listeProduits));
    
  }

  constructor() {
    this.mapCategorieProduits.set(
      "bd", [
        { ref: "bd1", label: "Carbonne et Silicium", prix: 10 },
        { ref: "roman", label: "Le Chat du Rabbin", prix: 15 },
        { ref: "manga", label: "Le Chat du Rabbin 2", prix: 15 }
      ]
    )
    
    this.mapCategorieProduits.set(
      "Jeu vidéo", [
      { ref: "jv1", label: "Mario 64", prix: 0 },
      { ref: "jv2", label: "Minecraft", prix: 39 },
      { ref: "jv3", label: "Sea of Thieves", prix: 70 },
    ]
    );

    this.mapCategorieProduits.set("other", [
      { ref: 'p5', label: 'smartPhone', prix: 255.6 },
      { ref: 'p6', label: 'TV', prix: 567.6 },
    ]);
 
  }

}
