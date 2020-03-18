import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent} from './product-details/product-details.component';
import { CategoriesComponent} from './categories/categories.component';
import { CategoryDetailsComponent} from './category-details/category-details.component';


const routes: Routes = [
  {path: 'products/:productId', component: ProductDetailsComponent},
  {path: 'categories', component:CategoriesComponent},
  {path: 'categories/:categoryId/products',component: CategoryDetailsComponent},
  {path: '', redirectTo: '/categories', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
