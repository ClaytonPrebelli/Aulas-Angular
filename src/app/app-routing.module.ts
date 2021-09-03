import { DetailsComponent } from './views/details/details.component';
import { CorpoComponent } from './templates/corpo/corpo.component';
import { ContatoComponent } from './views/contato/contato.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: CorpoComponent,
    data:{
      description:"paçocaprebelli",
      ogTitle:"Aplicação Angular de filmes",
      ogDescription:"PaçocaPrebelli",
      keywords:['paçocaprebelli'],
      ogUrl:"https://vercel.com/claytonprebelli/aulas-angular",
          }
  },{
    path: "contato",
    component: ContatoComponent,
    data:{
      description:"contato da paçoca prebelli",
      ogTitle:"Contato",
      ogDescription:"Contato com os desenvolvedores",
      keywords:['paçocaAngular'],
      ogUrl:"https://vercel.com/claytonprebelli/aulas-angular/contato",
          }
  },
  {
    path:"details/:id",
    component:DetailsComponent
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
