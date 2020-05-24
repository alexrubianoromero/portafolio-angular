import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo : any[] =[];

  constructor( private _Http:HttpClient) {
      // console.log('Servicio de infopagina listo ');

       this.cargarInfo();
       this.cargarEquipo();

   }

   private cargarInfo(){
    this._Http.get('assets/data/data-pagina.json')
    .subscribe( (resp:InfoPagina) =>{
       this.cargada = true;
       this.info = resp ;
      //console.log(resp);
      // console.log(resp['email']);
    });
   }

   private cargarEquipo(){
    this._Http.get('https://angular-html-ac3e2.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) =>{
       this.equipo =resp;
       //console.log(resp);
      // console.log(resp['email']);
    });

   }

}
