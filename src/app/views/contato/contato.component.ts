import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
 
  constructor(private meta: Meta) { 
    this.meta.addTags([
      { name: 'description', content: 'Contato teste da pagina angular' },
      { name: 'title', content: 'Contato' },
      { name: 'keywords', content: 'angular, javascript, typescript, meta, seo' } ,
      { name: 'og:title', content: 'Contato' },
      { name: 'og:description', content: 'Contato teste da pagina angular' },
      { name: 'og:image', content: 'https://image.tmdb.org/t/p/w500/9jPa6SlUYxPFMVZlEuceiPPAA15.jpg' },
      {name:"og:image:type", content:"image/png"},
      { name: 'og:site_name', content: 'Contato' },
      {name: "og:image:width", content:"2400"},
  {name:"og:image:height", content:"1260"},
    ]);
  }

  ngOnInit(): void {

  }
  
}
