import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product.model";
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Array<Product>=[]

  //private http!:HttpClient;

  constructor(private service:DataService, private router:Router) {
   // this.http=http;
  }

  getProduct(){
    this.service.getProducts()
      .subscribe(
        {
          next:data=>{
            this.products=data;
          },
          error:err=>{
            console.log(err);
          }
        }
      );
  }
  ngOnInit(): void {
    this.getProduct();
  }


  handleStockProduct(prd: Product) {
   this.service.stockProduct(prd)
     .subscribe({
      next:value=>{
        prd.inStock=!prd.inStock;  // this.getProduct();
      },
      error:err=>{
        console.log(err);
      }
    });
  }

  handleDeleteProduct(prd: Product) {
      this.service.deleteProduct(prd)
            .subscribe({
                  next:value=>{
                    this.products=this.products.filter(p=>p.id!=prd.id);
                    // this.getProducts();
                  },
                  error:err=>{
                    console.log(err);
                  }
      });
  }

  handleUpdateProduct(prd: Product) {
    this.router.navigateByUrl("/editProduct/"+prd.id);
  }
}
