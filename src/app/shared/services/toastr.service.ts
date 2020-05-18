import { Injectable } from "@angular/core";
declare var toastr: any;
@Injectable({
  providedIn: "root",
})
export class ToastrService {
  constructor() {}

  success(title, msg) {
    toastr.success(msg, title);
  }
  info(title, msg) {
    toastr.info(msg, title);
  }
  warning(title, msg) {
    toastr.warning(msg, title);
  }
  error(title, msg) {
    toastr.error(msg, title);
  }

  wait(title, msg) {
    toastr.info(msg, title, { timeOut: 3000 });
  }
}
