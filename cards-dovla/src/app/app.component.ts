import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {title: 'Neat Tree',
    imgName: 'tree.jpeg',
    username: 'nature',
    content: 'Saw this awesome tree during my hike today'},
    {title: 'Snow Mountain',
    imgName: 'mountain.jpeg',
    username: 'mountainlover',
    content: 'Here is a picture of snowy mountain'},
    {title: 'Mountain Bike',
    imgName: 'biking.jpeg',
    username: 'biking1986',
    content: 'I did some biking'},
  ];
}
