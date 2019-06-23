// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Carousel Modules
import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';
// import { MatCarouselModule } from '@ngmodule/material-carousel';

// Material Modules
import { MatMenuModule } from '@angular/material/menu';

// Routing
import { routing } from './app.routing';


// Components
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './core/home/home.component';

// MatCarousel Components
// import { MatCarouselComponent } from '@ngmodule/material-carousel';
// import { MatCarouselSlideComponent } from '@ngmodule/material-carousel';

@NgModule({
   declarations: [
      AppComponent,
      CoreComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      Angular2UsefulSwiperModule,
      // MatCarouselModule,
      MatMenuModule,
      routing
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
