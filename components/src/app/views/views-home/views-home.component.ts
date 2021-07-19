import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  statistics = [
    {label: 'Fevs', count: 55},
    {label: 'Vews', count: 5000000},
    {label: 'Folovers', count: 3500},
  ];

  itemList = [
    {
      name: 'fancy strawberries',
      imgUrl: 'https://images.unsplash.com/photo-1626511718671-1d05f722f940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      description: 'Proin faucibus arcu quis ante.\n' +
        '\n' +
        'Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi.'
    },
    {
      name: 'Sandwich',
      imgUrl: 'https://images.unsplash.com/photo-1626483642291-5d3a9e4935ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      description: 'Fusce commodo aliquam arcu. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Praesent ac sem eget est egestas volutpat.\n' +
        '\n' +
        'Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Nullam dictum felis eu pede mollis pretium. Curabitur nisi.'
    },
    {
      name: 'Polstar',
      imgUrl: 'https://images.unsplash.com/photo-1626517060370-84ee259cc228?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80',
      description: 'Nullam accumsan lorem in dui. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Nullam vel sem.\n' +
        '\n' +
        'Suspendisse eu ligula. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Morbi nec metus.'
    },
    {
      name: 'Pink Burger',
      imgUrl: 'https://images.unsplash.com/photo-1626483641739-96422935eb93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1020&q=80',
      description: 'Phasellus magna. Pellentesque auctor neque nec urna. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.\n' +
        '\n' +
        'Praesent egestas neque eu enim. In ac felis quis tortor malesuada pretium. Aliquam lobortis.\n' +
        '\n' +
        'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Curabitur vestibulum aliquam leo. Cras dapibus.'
    },  {
      name: 'Pink Burger',
      imgUrl: '',
      description: 'Phasellus magna. Pellentesque auctor neque nec urna. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.\n' +
        '\n' +
        'Praesent egestas neque eu enim. In ac felis quis tortor malesuada pretium. Aliquam lobortis.\n' +
        '\n' +
        'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Curabitur vestibulum aliquam leo. Cras dapibus.'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
