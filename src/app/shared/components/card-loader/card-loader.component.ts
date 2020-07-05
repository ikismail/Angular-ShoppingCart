import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-loader",
  template: `
    <div class="row">
      <div class="col-3" *ngFor="let number of arrayOne(loop)">
        <ngx-content-loading [height]="height">
          <svg:g ngx-instagram-preset></svg:g>
        </ngx-content-loading>
      </div>
    </div>
  `,
  styleUrls: [],
})
export class CardLoaderComponent implements OnInit {
  @Input() loop: number;
  @Input() height: number;

  constructor() {}

  ngOnInit() {}

  arrayOne(n: number): any[] {
    return Array(n);
  }
}
