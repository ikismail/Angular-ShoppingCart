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
import { ToastOptions, ToastyService, ToastyConfig } from "ng2-toasty";

@Injectable()
export class ProductService {
  products: AngularFireList<Product>;
  product: AngularFireObject<Product>;

  // favouriteProducts
  favouriteProducts: AngularFireList<FavouriteProduct>;
  cartProducts: AngularFireList<FavouriteProduct>;

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService,
    private userService: UserService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    // Toaster Config
    this.toastyConfig.position = "top-right";
    this.toastyConfig.theme = "material";
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

      a = JSON.parse(localStorage.getItem("avf_item")) || [];

      a.push(data);

      const toastOption: ToastOptions = {
        title: "Adding Product to Local",
        msg:
          "Please add favourite products after signing in to update to server",
        showClose: true,
        timeout: 5000,
        theme: "material"
      };
      this.toastyService.wait(toastOption);
      setTimeout(() => {
        localStorage.setItem("avf_item", JSON.stringify(a));
      }, 1500);
    }
    if (this.authService.isLoggedIn() === true) {
      const user = this.authService.getLoggedInUser();

      const productKey = data.$key;

      delete data.$key;

      const toastOption: ToastOptions = {
        title: "Favourite Product",
        msg: "Adding Product as favourite",
        showClose: true,
        timeout: 5000,
        theme: "material"
      };
      this.toastyService.wait(toastOption);
      setTimeout(() => {
        this.favouriteProducts.push({
          product: data,
          productId: productKey,
          userId: user.$key
        });
      }, 1500);
    }
  }

  getLocalFavouriteProducts(): Product[] {
    const products: Product[] =
      JSON.parse(localStorage.getItem("avf_item")) || [];

    return products;
  }

  removeFavourite(key: string) {
    this.favouriteProducts.remove(key);
  }

  removeLocalFavourite(key: string) {}

  /*
   ----------  Cart Product Function  ----------
  */

  getUsersCartProducts() {
    const user = this.authService.getLoggedInUser();
    this.cartProducts = this.db.list("cartProducts", ref =>
      ref.orderByChild(user.$key)
    );
    return this.cartProducts;
  }

  addToCart(data: Product): void {
    if (this.authService.isLoggedIn() === false) {
      let a: Product[];

      a = JSON.parse(localStorage.getItem("avct_item")) || [];

      a.push(data);

      const toastOption: ToastOptions = {
        title: "Adding Product to Local Cart",
        msg: "Please add product to cart after signing in to update to server",
        showClose: true,
        timeout: 5000,
        theme: "material"
      };
      this.toastyService.wait(toastOption);
      setTimeout(() => {
        localStorage.setItem("avct_item", JSON.stringify(a));
      }, 1500);
    }
    if (this.authService.isLoggedIn() === true) {
      const user = this.authService.getLoggedInUser();

      const productKey = data.$key;

      delete data.$key;

      const toastOption: ToastOptions = {
        title: "Added  to Cart",
        msg: "Adding Product to Cart",
        showClose: true,
        timeout: 5000,
        theme: "material"
      };
      this.toastyService.wait(toastOption);
      setTimeout(() => {
        this.cartProducts.push({
          product: data,
          productId: productKey,
          userId: user.$key
        });
      }, 1500);
    }
  }

  removeCart(key: string) {
    this.cartProducts.remove(key);
  }

  getLocalCartProducts(): Product[] {
    const products: Product[] =
      JSON.parse(localStorage.getItem("avct_item")) || [];

    return products;
  }
}

export class FavouriteProduct {
  product: Product;
  productId: string;
  userId: string;
}
