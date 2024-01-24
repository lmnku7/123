import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public productForm!:FormGroup;
  productId:number;

  constructor(private fb:FormBuilder, private activatedRoute:ActivatedRoute,
              private service :DataService) {
    this.productId=this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.service.getProductById(this.productId)
      .subscribe({
        next:data=>{

          this.productForm=this.fb.group({
            id:this.fb.control(data.id),
            name:this.fb.control(data.name),
            price:this.fb.control(data.price),
            inStock:this.fb.control(data.inStock)
          });

        },
        error:err=>{
          console.log(err);
        }
      });
  }

  handleUpdateProduct() {
    this.service.updateProduct(this.productForm.value)
      .subscribe({
        next:value=>{
          alert("update success");
        },
        error:err=>{
          console.log(err);
        }
      });
  }
}
