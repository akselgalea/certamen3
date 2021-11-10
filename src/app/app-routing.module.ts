import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { CardsComponent } from './cards/cards.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {
    path: "",
    component: CardsComponent
  },
  {
    path: "lista",
    component: ListaComponent,
  },

  {
    path: "adicionar",
    component: AdicionarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
