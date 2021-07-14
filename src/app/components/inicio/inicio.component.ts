import { Component, OnInit } from '@angular/core';
// For MDB Angular Free
import { CarouselModule,  NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
// Forms Module - for ngModel
import { FormsModule } from '@angular/forms'
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  langs: string[] = [];

  constructor(private traduccion: TranslateService) {
    this.traduccion.setDefaultLang('es');
    this.traduccion.use('es');
    this.traduccion.addLangs(["es", "en"]);
    this.langs = this.traduccion.getLangs();
    traduccion.get(this.langs).subscribe( res => {
      console.log(res);
    });
   }

  ngOnInit(): void {
  }
  
  cambiarLang(lang: string) {
    this.traduccion.use(lang);
  }



}
