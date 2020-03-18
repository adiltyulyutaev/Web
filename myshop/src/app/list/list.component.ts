import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {CategoryService} from '../category.service'
import {categories,Category} from '../categories';
import { products,Product } from '../products';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products: any;
  category: any;
constructor(
  private router: Router,
  private route: ActivatedRoute,
  private productService: ProductService,
  private categoryService: CategoryService
) {
  this.router.events.subscribe((value => {
    this.getProducts();
    this.getCategory();
  }));
}

ngOnInit() {
  this.getProducts();
  this.getCategory();
}

getProducts() {
  const id = +this.route.snapshot.paramMap.get('id');
  this.productService.getProductsByCategoryId(id).subscribe(products => this.products = products);
}

getCategory() {
  const id = +this.route.snapshot.paramMap.get('id');
  this.categoryService.getCategory(id).subscribe(category => this.category = category);
}

}
