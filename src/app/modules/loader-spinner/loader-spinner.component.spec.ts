import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoaderSpinnerComponent } from "./loader-spinner.component";

describe("LoaderSpinnerComponent", () => {
  let component: LoaderSpinnerComponent;
  let fixture: ComponentFixture<LoaderSpinnerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LoaderSpinnerComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
