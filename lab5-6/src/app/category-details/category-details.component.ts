import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {ActivatedRoute} from '@angular/router';
import {CategoryServiceService} from '../category-service.service';
import {Product} from '../products';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  products: Product[];
  category: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryServiceService,
    private location: Location
  ) {}

  getCategoryProducts(): void {
    const id = +this.route.snapshot.paramMap.get('categoryId');
    this.categoryService.getCategoryProducts(id)
      .subscribe(products => this.products = products);
    this.categoryService.getCategory(id)
      .subscribe(category => this.category = category);
  }

  ngOnInit(): void {
    this.getCategoryProducts();

  }

  goBack(): void {
    this.location.back();
  }


}
