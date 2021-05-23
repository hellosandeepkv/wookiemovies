import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  public BASEURL = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  public getMovieList() {
    return this.http.get(this.BASEURL + "/movies");
  }

  public getMovieByTitle(title) {
    return this.http.get(this.BASEURL + "/movies?q=" + title);
  }
}
