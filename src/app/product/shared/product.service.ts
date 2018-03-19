import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";
import { Product } from "../model/product";
import { AuthService } from "../../index/shared/auth.service";
import { UserService } from "../../user/shared/user.service";
import { query } from "@angular/core/src/animation/dsl";

@Injectable()
export class ProductService {
  products: AngularFireList<Product>;
  product: AngularFireObject<Product>;

  // favouriteProducts
  favouriteProducts: AngularFireList<FavouriteProduct>;

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService,
    private userService: UserService
  ) {
    const a = [];
    sessionStorage.setItem("avf_item", JSON.stringify(a));
  }

  getProducts() {
    this.products = this.db.list("products");
    return this.products;
  }

  createProduct(data: Product) {
    this.products.push(data);
  }

  getProductById(key: string) {
    this.product = this.db.object("products/" + key);
    return this.product;
  }

  updateProduct(data: Product) {
    this.products.update(data.$key, data);
  }

  deleteProduct(key: string) {
    this.products.remove(key);
  }

  /*
   ----------  Favourite Product Function  ----------
  */
  getUsersFavouriteProduct() {
    const user = this.authService.getLoggedInUser();
    this.favouriteProducts = this.db.list("favouriteProducts", ref =>
      ref.orderByChild(user.$key)
    );
    return this.favouriteProducts;
  }

  addFavouriteProduct(data: Product): void {
    if (this.authService.isLoggedIn() === false) {
      let a: Product[];

      a = JSON.parse(sessionStorage.getItem("avf_item"));

      a.push(data);

      sessionStorage.setItem("avf_item", JSON.stringify(a));
    }
    if (this.authService.isLoggedIn() === true) {
      const user = this.authService.getLoggedInUser();

      const productKey = data.$key;

      delete data.$key;

      this.favouriteProducts.push({
        product: data,
        productId: productKey,
        userId: user.$key
      });
    }
  }

  getLocalFavouriteProducts(): Product[] {
    if (sessionStorage.getItem("avf_item")) {
      return JSON.parse(sessionStorage.getItem("avf_item"));
    }
    return [];
  }

  removeFavourite(key: string) {
    this.favouriteProducts.remove(key);
  }

  removeLocalFavourite(key: string) {}
}

export class FavouriteProduct {
  product: Product;
  productId: string;
  userId: string;
}
