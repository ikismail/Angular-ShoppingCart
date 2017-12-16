import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProductComponent } from './product-module/product.component';

export const appRoutes: Routes = [
  { path: "", component: AppComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  declarations: []
})
export class AppRouterModule { }
