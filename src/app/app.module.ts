import { ProductModule } from "./product/product.module";
import { AppRoutes } from "./app.routing";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { IndexModule } from "./index/index.module";
import { LoaderSpinnerModule } from "./modules/loader-spinner/loader-spinner";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IndexModule,
        ProductModule,
        LoaderSpinnerModule,
        RouterModule.forRoot(AppRoutes, { enableTracing: true })
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
