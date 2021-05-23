import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoviesRoutingModule } from "./movies-routing.module";
import { ListComponent } from "./list/list.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpInterceptorService } from "./interceptor/http-interceptor.service";

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, MoviesRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
})
export class MoviesModule {}
