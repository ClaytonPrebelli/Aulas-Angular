import { ConsumoService } from './../../consumo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
dados_filme:any;
url_imagem='https://image.tmdb.org/t/p/w500';
  constructor(private activated: ActivatedRoute, private consumoService:ConsumoService ) { }

  ngOnInit(): void {
    const id = this.activated.snapshot.paramMap.get('id');
    this.consumoService.buscaDetalhes(id).subscribe(dados=>{
      this.dados_filme = dados;
      console.log(this.dados_filme)
    });


  }

}
