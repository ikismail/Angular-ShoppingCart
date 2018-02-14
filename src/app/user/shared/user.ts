export class User {
  $key: string;
  userName: string;
  emailId: string;
  password: string;
  location: {
    lat: number;
    lon: number;
  };
  phoneNumber: string;
  isAdmin: boolean;
}
