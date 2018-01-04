import { FormsModule } from "@angular/forms";
import { ProductRoutes } from "./product.routing";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { BestProductComponent } from "./best-product/best-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { RouterModule } from "@angular/router";
import { ProductService } from "./shared/product.service";
import { AddProductComponent } from "./add-product/add-product.component";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ProductRoutes), FormsModule],
  declarations: [ProductComponent, BestProductComponent, ProductListComponent,
    AddProductComponent
  ],
  exports: [BestProductComponent],
  providers: [ProductService]
})
export class ProductModule { }
