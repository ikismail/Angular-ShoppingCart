export class User {
  $key: string;
  emailId: string;
  location: {
    lat: number;
    lon: number;
  };
  password: string;
  isAdmin: boolean;
}
