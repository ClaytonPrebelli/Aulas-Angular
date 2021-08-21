import { DetailsComponent } from './views/details/details.component';
import { CorpoComponent } from './templates/corpo/corpo.component';
import { ContatoComponent } from './views/contato/contato.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: CorpoComponent
  },{
    path: "contato",
    component: ContatoComponent
  },
  {
    path:"details/:id",
    component:DetailsComponent
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
