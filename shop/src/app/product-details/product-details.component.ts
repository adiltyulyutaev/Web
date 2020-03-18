import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from '../category-service.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Product} from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryServiceService,
    private location: Location
  ) { }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    this.categoryService.getProduct(id).
    subscribe(product => this.product = product);
  }



  goBack(): void {
    this.location.back();
  }


  ngOnInit(): void {
    this.getProduct();
  }

}
