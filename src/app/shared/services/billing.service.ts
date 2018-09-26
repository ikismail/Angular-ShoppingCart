import {
  AngularFireList,
  AngularFireObject,
  AngularFireDatabase
} from "angularfire2/database";
import { Billing } from "./../models/billing";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BillingService {
  billings: AngularFireList<Billing>;
  billing: AngularFireObject<Billing>;
  constructor(private db: AngularFireDatabase) {
    this.getBillings();
  }

  createBillings(data: Billing) {
    this.billings.push(data);
  }

  getBillings() {
    this.billings = this.db.list("billings");
    return this.billings;
  }

  getBillingById(key: string) {
    this.billing = this.db.object("products/" + key);
    return this.billing;
  }

  updateBilling(data: Billing) {
    this.billings.update(data.$key, data);
  }

  deleteBilling(key: string) {
    this.billings.remove(key);
  }
}
