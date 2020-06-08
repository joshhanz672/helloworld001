import { AuthorsService } from './author/authors.service';
import { Component } from '@angular/core';

@Component({
    /*selector: 'authors',
    template: 
        `<h2>{{ getAuthors() }}</h2>
        <ul>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        </ul>
        ` */

        /*
        selector: 'authors',
       template: `
        <h2> {{ author }} </h2>
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />
        `
        */

      /* selector: 'authors',
       template: `
        <img [src]="imageUrl" />
        <table>
          <tr>
            <td [attr.colspan]="colSpan"></td>
          </tr>
        </table>
        `
    */
   /*
   selector: 'authors',
   template: `
      <button class="btn btn-primary" [class.active]="isActive">Save</button>
   `
    */

    /*
   selector: 'authors',
   template: `
      <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
   `  */


   /*
   selector: 'authors',
   template: `


     <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Save</button>
     </div>
   `
   */

  selector: 'authors',
  template: ` 
    <input (keyup)="onKeyUp($event)" />
    `


})
export class AuthorsComponent {
onKeyUp($event)
 {
   if ($event.keyCode === 13) console.log("enter was pressed");
 }

   // isActive = false;

   /*
   onDivClicked()
   {
        console.log("Div was clicked")

   }

    onSave($event)
    {
        $event.stopPropagation();

       console.log("Button was clicked");
    }

    authName = "List of authors";
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;

    authors;

    // logic for calling an HTTP service
    constructor(service: AuthorsService) {
       // let service = new CoursesService();
       
        this.authors = service.getAuthors();

        */


    /*}


/*
    getAuthors()
    {
        return this.authName;
    }
    */

}