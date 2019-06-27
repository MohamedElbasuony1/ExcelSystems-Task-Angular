import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  invalidAdd: boolean;
  constructor(private service: ProductService) { }

  getAll() {
    this.service.GetAll().subscribe(
      a =>  this.products = a,
      err => console.log(err)
      );
  }

  ngOnInit() {
    this.getAll();
  }
  saveEditable(item: Product) {
    this.service.UpdateProduct(item).subscribe(response => {
    }, err => {
      console.log(err);
    });
  }

  Delete(id: number) {
    this.service.DeleteProduct(id).subscribe(response => {
      this.getAll();
    }, err => {
      console.log(err);
    });
  }

  Add(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.service.AddProduct(credentials).subscribe(response => {
      this.products.push(response);
      this.getAll();
    }, err => {
      this.invalidAdd = true;
    });
  }

}
