import { ProductModule } from "./product/product.module";
import { AppRoutes } from "./app.routing";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IndexModule } from "./index/index.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IndexModule,
    ProductModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
