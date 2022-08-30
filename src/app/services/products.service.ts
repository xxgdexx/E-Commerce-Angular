import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product , CreateProductDTO , UpdateProductDTO} from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiURL);
  }

  getProduct(id: string){
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

  create(dto: CreateProductDTO){
    return this.http.post<Product>(this.apiURL, dto);
  }
  //PUT = Todo el objeto  or PATCH una parte del objeto
  update(id:string , dto: UpdateProductDTO){
    return this.http.put<Product>(`${this.apiURL}/${id}`, dto);
  }

}
