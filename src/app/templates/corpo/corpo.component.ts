import { Meta } from '@angular/platform-browser';
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
  
  constructor(private servico:ConsumoService, private meta:Meta) { 
    this.meta.addTags([
      { name: 'description', content: 'Aplicação angular feita em aulas' },
      { name: 'title', content: 'Aulas Angular' },
      {property:"og:url", content:"https://aulas-angular.vercel.app/"},
      { property: 'keywords', content: 'angular, javascript, typescript, meta, seo' } ,
      { property: 'og:title', content: 'Aulas angular' },
      { property: 'og:description', content: 'Aplicação angular feita em aulas' },
      { property: 'og:image', content: 'https://image.tmdb.org/t/p/w500/9E76j2DcQv8LdbX1Wa9jpbDBfw1.jpg' },
      {property:"og:image:type", content:"image/png"},
      { property: 'og:site_name', content: 'Aulas Angular' },
      {property: "og:image:width", content:"2400"},
  {property:"og:image:height", content:"1260"},
    ]);
  }

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
