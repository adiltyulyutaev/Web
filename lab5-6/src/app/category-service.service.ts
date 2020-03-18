import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {categories,Category} from './category';
import {products,Product} from './products';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  getCategories(): Observable<Category[]> {
     return of(categories);
   }
   getCategory(id: number): Observable<Category> {
     return of(categories.find(category => category.id === id));
   }

   getCategoryProducts(id: number): Observable<Product[]> {
     return of(products.filter(product => product.category_id === id));
   }

   getProduct(id: number): Observable<Product> {
     return of(products.find(product => product.id === id));
   }
  constructor() { }
}
