import { UserService } from "./../shared/user.service";
import { User } from "./../shared/user";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-locate",
  templateUrl: "./user-locate.component.html",
  styleUrls: ["./user-locate.component.scss"]
})
export class UserLocateComponent implements OnInit {

  zoom = 2;
  scrollWheel = true;
  zoomControl = true;
  // info Window
  isOpen = false;
  infoContent: string;

  users: User[];
  viewData = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    const x = this.userService.getUsers();
    x.snapshotChanges().subscribe(user => {
      this.users = [];
      let i = 0;
      user.forEach(element => {
        const y = element.payload.toJSON();
        const charCode = "A";
        y["$key"] = element.key;
        y["label"] = String.fromCharCode(charCode.charCodeAt(0) + i++);
        this.users.push(y as User);
      });
    });
  }
}
