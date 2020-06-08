import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css'],
    styles: [
        `
        .glyphicon {
         color: green;
        }

        .glyphicon-star 
        {
            background: black;
        }
        `
    ]
  })
  
  
  export class FavoriteComponent implements OnInit {
    //isFavorite: boolean;

    @Input('isFavorite') isSelected: boolean;

    @Output('change') click = new EventEmitter();

    constructor() {}

    ngOnInit() {

    }

    onClick()
    {
        this.isSelected = !this.isSelected;
        this.click.emit({ newValue: this.isSelected});
    }
  }

  export interface FavoriteChangedEventArgs{
    newValue: boolean
  }