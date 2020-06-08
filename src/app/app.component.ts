import { Component } from '@angular/core';
//import { FavoriteChangedEventArgs } from './favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Angular NodeJs hello-world001';
}




/*
export class AppComponent {
  //title = 'Angular NodeJs hello-world001';
  post = {
    title: "Title",
    isFavorite: true
  }
}
*/

/*
export class AppComponent {
  title = 'Angular NodeJs hello-world001';
  post = {
    title: "Title",
    isFavorite: true
    }

    onFavoriteChanged(eventArgs: FavoriteChangedEventArgs)
    {
      console.log("Favorite Changed", eventArgs);

    }
  }
  */