import { LoaderSpinnerService } from "./loader-spinner.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderSpinnerComponent } from "./loader-spinner.component";

@NgModule({
  imports: [],
  declarations: [LoaderSpinnerComponent],
  exports: [LoaderSpinnerComponent],
  providers: [LoaderSpinnerService]
})
export class LoaderSpinnerModule {}
