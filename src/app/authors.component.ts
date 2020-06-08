import { AuthorsService } from './author/authors.service';
import { Component } from '@angular/core';

@Component({


  selector: 'authors',
  template: ` 
  {{ text | summary:10 }}
  
  `

})

export class AuthorsComponent {
  
  author = {
    title:  "Complete angualr course",
    rating: 4.974455,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }

  text = `
    Yagshemash, Menya zovut Borat, ya iz Kazakhstan.
  `
 

}