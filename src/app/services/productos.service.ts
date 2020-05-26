import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
cargando= true;
productos : Producto[] = [];
productosFiltrado : Producto[] = [];
  constructor( private http: HttpClient ) { 
    this.cargarProductos();
  }
  private cargarProductos(){

      return new Promise( (resolve , reject)=>{
        this.http.get('https://angular-html-ac3e2.firebaseio.com/productos_idx.json')
        .subscribe((resp:Producto[])=>{
          //console.log(resp);
          this.productos = resp;
          //setTimeout(() => {
          this.cargando = false;
          //}, 2000);
          resolve();
        });
      });

     
  }

  getProducto(id:string){
    return this.http.get(`https://angular-html-ac3e2.firebaseio.com/productos/${ id }.json`);
  }
  buscarProducto( termino:string){
     if( this.productos.length===0){
       //cargar producots 
     } else{
       //aplicxar el filtro
     }
    this.productosFiltrado=this.productos.filter(producto=>{
      return true;
    });
    console.log(this.productosFiltrado);
  }
}
