import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
  
    selector: 'courses',
    template: 
        `<h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        ` 
        

        /*
       selector: 'courses',
       template: `
        <h2> {{ title }} </h2>
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />
        `
        */

})
export class CoursesComponent {
    title = "List of courses";
    //imageUrl = "http://lorempixel.com/400/200";

    courses;

    // logic for calling an HTTP service
    constructor(service: CoursesService) {
       // let service = new CoursesService();

        this.courses = service.getCourses();
    }



    getTitle()
    {
        return this.title;
    }

}