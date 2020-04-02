import { Component, OnInit } from '@angular/core';
import { Recette } from './recette.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  recetteList: Recette[];
  constructor() {
  }

  ngOnInit() {
this.recetteList = [ new Recette('1 heure', 'plat',
'Poulet rotie', 'nettoyer le poulet puis le masser de beurrer et le mettre au four à 200° pendant 1h/kg',
 [{name: 'Poulet', pricePerKilo: 10, image : 'urlphoto'}]),
 new Recette('30 min', 'plat',
// tslint:disable-next-line: max-line-length
'Carbonara', 'Melanger oeufs et parmesan dans un bol, cuire les pâtes et la pancetta, verser les pâte et la pancetta dans le mélange et poivrer',
 [{name: 'Tagliatelle', pricePerKilo: 1, image : 'urlphoto'}, {name: 'Oeufs', pricePerKilo:1.5, image: 'urlphoto'},
 {name: 'Pancetta', pricePerKilo: 12, image: 'urlphoto'}])

];
  }
}
