import { Injectable } from "@angular/core";
declare var toastr: any;
@Injectable({
  providedIn: "root",
})
export class ToastrService {
  constructor() {}

  success(title: any, msg: any) {
    toastr.success(msg, title);
  }
  info(title: any, msg: any) {
    toastr.info(msg, title);
  }
  warning(title: any, msg: any) {
    toastr.warning(msg, title);
  }
  error(title: any, msg: any) {
    toastr.error(msg, title);
  }

  wait(title: any, msg: any) {
    toastr.info(msg, title, { timeOut: 3000 });
  }
}
