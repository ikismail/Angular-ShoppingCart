// Core Dependencies
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// configuration and services
import { ProductRoutes } from "./product.routing";

// Components
import { ProductComponent } from "./product.component";
import { BestProductComponent } from "./best-product/best-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ProductRoutes), SharedModule],
  declarations: [
    ProductComponent,
    BestProductComponent,
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent
  ],
  exports: [BestProductComponent]
})
export class ProductModule {}
