import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  datalist: any = [];
  movieTab: any = true;
  movieContent: any = {};
  genereContent = {};
  genereKeys = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.movieService.getMovieList().subscribe((response) => {
      this.datalist = response["movies"];
      this.getGenereData();
    });
  }

  getGenereData() {
    this.genereContent = {};
    this.datalist.forEach((element) => {
      element["genres"].forEach((genere) => {
        if (!this.genereContent.hasOwnProperty(genere)) {
          this.genereContent[genere] = [];
        }
        this.genereContent[genere].push(element);
      });
    });
    this.genereKeys = Object.keys(this.genereContent);
  }

  openContent(data) {
    this.movieTab = false;
    this.movieContent = data;
  }

  goBack() {
    this.movieTab = true;
  }

  searchMovie(e) {
    this.movieService.getMovieByTitle(e).subscribe((response) => {
      this.datalist = response["movies"];
      this.movieTab = true;
      this.getGenereData();
    });
  }
}
