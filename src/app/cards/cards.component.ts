import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interface.cliente';
import { IPais } from '../interface.pais';
import { IGenero } from '../interface.genero';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  cards : Array<ICliente> = [
    {id: 1, name: "Pepita Cruz", gender: 2, country: 1, city: "Valparaiso"},
    {id: 2, name: "Juan Totto", gender: 1, country: 2, city: "Metropolitana"},
    {id: 3, name: "Pedro Tijuana", gender: 2, country: 1, city: "Metropolitana"},
    {id: 4, name: "Juana de Arco", gender: 1, country: 2, city: "Valparaiso"},
    {id: 3, name: "Pedro Equis", gender: 3, country: 3, city: "Metropolitana"},
    {id: 4, name: "Juana de Banco", gender: 3, country: 4, city: "Valparaiso"}
  ];

  genders : Array<IGenero> = [
    {id: 1, name: "Hombre"},
    {id: 2, name: "Mujer"},
    {id: 3, name: "Otro"}
  ];

  countries : Array<IPais> = [
    {id: 1, name: "Chile"},
    {id: 2, name: "Argentina"},
    {id: 3, name: "Peru"},
    {id: 4, name: "Bolivia"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getImg(gender : number) {
    switch(gender) {
      case 1: return "maleuser.svg";
      case 2: return "femaleuser.svg";
      case 3: return "other.svg";
      default: return "other.svg";
    }
  }

  getCountry(id : number) {
    for(let i = 0; i < this.countries.length; i++) {
      if(id == this.countries[i].id) return this.countries[i].name;
    }

    return "none";
  }

  getGender(gender : number){
    for(let i = 0; i < this.genders.length; i++) {
      if(gender == this.genders[i].id) return this.genders[i].name;
    }

    return "none";
  }
}
