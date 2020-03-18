import { Component, OnInit } from '@angular/core';

import { products,Product } from '../products';
import { ProductService} from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product;

  constructor(private productService: ProductService) {}


  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    // tslint:disable-next-line:no-shadowed-variable
    this.productService.getProducts().subscribe(products => this.products = products);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
