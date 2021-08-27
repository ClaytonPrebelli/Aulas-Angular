import { environment } from './../../../environments/environment.prod';
import { ConsumoService } from './../../consumo.service';
import { ListaFilmes } from './corpo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {
  lista!:ListaFilmes[]
  url_imagem='https://image.tmdb.org/t/p/w500';
  
  constructor(private servico:ConsumoService) { }

  ngOnInit(): void { 
      this.servico.getList().subscribe(dadosRecebidos=>{
          this.lista =  dadosRecebidos['results']       
          console.log(this.lista);
          
          this.lista.sort(function (a,b){
            if (a.vote_count > b.vote_count){
                return -1;
            }
            if (a.vote_count < b.vote_count){
                return 1;
            }
            return 0;
          });

          console.log(this.lista)

          //ordenar os dados
        
      })
  }

  


  }
