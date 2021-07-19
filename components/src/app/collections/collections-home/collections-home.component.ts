import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name: 'Cameron', age: '36', job: 'Med', employed: true},
    {name: 'Michel', age: '55', job: 'Designer'},
    {name: 'Pamela', age: '15', job: 'Student', employed: false}
  ];
  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
    {key: 'employed', label: 'Has a job'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
