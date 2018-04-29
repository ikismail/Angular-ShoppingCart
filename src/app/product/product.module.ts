import { FilterByBrandPipe } from "./shared/filterByBrand.pipe";
// Core Dependencies
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// Third Party Dependencies
import { NgxPaginationModule } from "ngx-pagination";
import { OwlModule } from "ngx-owl-carousel";
import { ToastyModule } from "ng2-toasty";

// configuration and services
import { ProductRoutes } from "./product.routing";
import { ProductService } from "./shared/product.service";

// Components
import { ProductComponent } from "./product.component";
import { BestProductComponent } from "./best-product/best-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    FormsModule,
    OwlModule,
    NgxPaginationModule,
    ToastyModule.forRoot()
  ],
  declarations: [
    ProductComponent,
    BestProductComponent,
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent,
    FilterByBrandPipe
  ],
  exports: [BestProductComponent],
  providers: [ProductService]
})
export class ProductModule {}
