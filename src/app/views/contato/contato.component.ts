import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'description', content: 'Contato de teste aulas angular' },
      { name: 'title', content: 'Contato' },
      { name: 'keywords', content: 'angular, javascript, typescript, meta, seo' } ,
      { name: 'og:title', content: 'Contato Teste' },
      { name: 'og:description', content: 'Contato de teste aulas angular' },
      { name: 'og:image', content: 'https://image.tmdb.org/t/p/w500/wTS3dS2DJiMFFgqKDz5fxMTri.jpg' },
      { name: 'og:site_name', content: 'Contato da Aplicação' },
    ]);
  }

}
