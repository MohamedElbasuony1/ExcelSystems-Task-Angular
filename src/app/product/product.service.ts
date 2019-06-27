import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl = 'http://localhost:50291/api/Product';
  constructor(private http: HttpClient) { }

  GetAll() {
    const token = localStorage.getItem('jwt');
    return this.http.get<Product[]>(this.baseurl + '/GetProducts', {
      headers: new HttpHeaders({
        'Authorization' : 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    });
  }

  AddProduct(product) {
    const token = localStorage.getItem('jwt');
    return this.http.post<Product>(this.baseurl + '/AddProduct', product, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    });
  }

  UpdateProduct(product: Product) {
    const token = localStorage.getItem('jwt');
    return this.http.put(this.baseurl + '/UpdateProduct', product, {
      headers: new HttpHeaders({
        'Authorization' : 'Bearer ' + token,
        'Content-Type' : 'application/json'
      })
    });
  }

  DeleteProduct(id: number)
  {
    const token = localStorage.getItem('jwt');
    return this.http.delete(this.baseurl + '/DeleteProduct?id=' + id, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    });
  }

}
