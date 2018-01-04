import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewEncapsulation
} from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { LoaderSpinnerService } from "./loader-spinner.service";

@Component({
  selector: "app-loader-spinner",
  templateUrl: "./loader-spinner.component.html",
  styleUrls: ["./loader-spinner.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LoaderSpinnerComponent implements OnInit, OnDestroy {
  @Input()
  _template: String = `
  <div style="color: #64d6e2" class="la-ball-clip-rotate-multiple la-3x">
    <div></div>
    <div></div>
    <div></div>
  </div>`;
  @Input() _loadingText: String = "";

  /**
   *
   * @type {Number}
   * @memberof LoaderSpinnerComponent
   */
  _threshold: Number = 500;

  /**
   * @memberof LoaderSpinnerComponent
   */
  @Input()
  public set template(value: String) {
    this._template = value;
  }

  /**
   * @readonly
   * @type {String}
   * @memberof LoaderSpinnerComponent
   */
  public get template(): String {
    return this._template;
  }

  /**
   *
   * @memberof LoaderSpinnerComponent
   */
  @Input()
  public set loadingText(value: String) {
    this._loadingText = value;
  }

  /**
   *
   * @readonly
   * @type {String}
   * @memberof LoaderSpinnerComponent
   */
  public get loadingText(): String {
    return this._loadingText;
  }

  /**
   *
   * @memberof LoaderSpinnerComponent
   */
  @Input()
  public set threshold(value: Number) {
    this._threshold = value;
  }

  /**
   *
   * @readonly
   * @type {Number}
   * @memberof LoaderSpinnerComponent
   */
  public get threshold(): Number {
    return this._threshold;
  }

  /**
   * Subscription
   * @type {Subscription}
   * @memberof LoaderSpinnerComponent
   */
  subscription: Subscription;
  /**
   * Enable/Disable spinner
   * @memberof LoaderSpinnerComponent
   */
  showSpinner = false;

  constructor(private loaderService: LoaderSpinnerService) {}

  ngOnInit() {
    this.createServiceSubscription();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //  Create Subscription
  createServiceSubscription() {
    let timer: any;

    this.subscription = this.loaderService.spinnerObservable.subscribe(show => {
      if (show) {
        if (timer) {
          return;
        }

        timer = setTimeout(
          function() {
            timer = null;

            this.showSpinner = show;
          }.bind(this),
          this._threshold
        );
      } else {
        if (timer) {
          clearTimeout(timer);

          timer = null;
        }

        this.showSpinner = false;
      }
    });
  }
}
