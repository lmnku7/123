import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listLien:Array<any>=[
    {nom:"Home",route:"/home",icon:"bi-house"},
    {nom:"Products",route:"/products",icon:"bi-arrow-down-up"},
    {nom:"New Product",route:"/newProduct",icon:"bi-plus-circle"},
  ];

  currentLien:any=this.listLien[0];


  setCurrentLien(lien: any) {
     this.currentLien=lien;
  }
}
