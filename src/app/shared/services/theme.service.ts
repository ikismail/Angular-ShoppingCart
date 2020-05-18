import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  constructor() {}

  updateThemeUrl(theme: string) {
    document.getElementsByTagName("body")[0].className = theme;

    localStorage.setItem("theme", JSON.stringify(theme));
  }
}
