import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ICliente } from '../interface.cliente';
import { IPais } from '../interface.pais';
import { IGenero } from '../interface.genero';
import { DataBase } from '../interface.database';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {
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

  db : DataBase = {
    cards: this.cards, genders: this.genders, countries: this.countries
  }
  
  formu = this.fb.group({
    name : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    lastname : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    gender : ['', Validators.required],
    country : ['', Validators.required],
    city : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]]
  });

  constructor(private fb : FormBuilder) {

  }

  ngOnInit(): void {
    
  }

  validarDatos() {
    let divForm = document.getElementById("formulario");
    let exito = document.getElementById("exito");
    //Añade el cliente al array
    this.cards.push(this.formu.value);
    //Muestra los clientes por consola
    console.log(this.cards);

    if(divForm && exito) {
      divForm.style.display = "none";
      exito.style.display = "block"
    }
    
  }

  //Limpia el formulario
  cleanForm() {
    this.formu.reset();
  }
}
