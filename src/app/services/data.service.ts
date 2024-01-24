import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }
  getProducts():Observable<Array<Product>>{
      return  this.http.get<Array<Product>>("http://localhost:5555/products");
  }

  getProductById(id:number):Observable<Product>{
     return  this.http.get<Product>("http://localhost:5555/products/"+id);
  }


  stockProduct(product:Product):Observable<Product> {
    return this.http.patch<Product>("http://localhost:5555/products/"+product.id,{
      inStock:!product.inStock
    })
  }


  deleteProduct(prd: Product):Observable<any> {
    return this.http.delete("http://localhost:5555/products/"+prd.id)
  }

  saveProduct(product: Product):Observable<Product> {
     return  this.http.post<Product>("http://localhost:5555/products/",product);
  }

  updateProduct(product:Product):Observable<Product> {
    return  this.http.put<Product>("http://localhost:5555/products/"+product.id,product);
  }
}
