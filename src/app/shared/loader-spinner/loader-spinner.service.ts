import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Observer } from "rxjs";
import "rxjs/add/operator/share";
@Injectable()
export class LoaderSpinnerService {
  /**
   * Spinner observer
   * @private
   * @type {Observer<any>}
   * @memberof LoaderSpinnerComponent
   */
  private spinnerObserver: Observer<any>;
  /**
   * Spinner observable
   * @type {Observable<any>}
   * @memberof LoaderSpinnerComponent
   */
  public spinnerObservable: Observable<any>;
  /**
   * Creates an instance of LoaderSpinnerComponent.
   * @memberof LoaderSpinnerComponent
   */
  constructor() {
    this.spinnerObservable = new Observable(observer => {
      this.spinnerObserver = observer;
    }).share();
  }
  /**
   * To show spinner
   * @memberof LoaderSpinnerComponent
   */
  show() {
    if (this.spinnerObserver) {
      this.spinnerObserver.next(true);
    }
  }
  /**
   * To hide spinner
   * @memberof LoaderSpinnerComponent
   */
  hide() {
    if (this.spinnerObserver) {
      this.spinnerObserver.next(false);
    }
  }
}
