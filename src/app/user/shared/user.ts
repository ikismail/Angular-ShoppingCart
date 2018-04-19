import { Product } from "../../product/model/product";

export class User {
  $key: string;
  userName: string;
  emailId: string;
  password: string;
  favouriteProducts: Product[];
  location: {
    lat: number;
    lon: number;
  };
  phoneNumber: string;
  isAdmin: boolean;
}
