import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './course/courses.service';
import { CoursesComponent } from './courses.component';
import { AuthorsService } from './author/authors.service';
import { AuthorsComponent } from './authors.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { FavoriteComponent } from './favorite.component';
//import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    AuthorsComponent,
    FavoriteComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
