import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPage = 0;
  pagerItems = 3;
  images = [
    {
      title: 'beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'mountain',
      url: 'https://images.unsplash.com/photo-1563253197-d086cc343dd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'dragon',
      url: 'https://images.unsplash.com/photo-1610575045175-6eaf903eb32a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJhZ29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'wolf',
      url: 'https://images.unsplash.com/photo-1588167056547-c183313da47c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29sZnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'mountain',
      url: 'https://images.unsplash.com/photo-1563253197-d086cc343dd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'dragon',
      url: 'https://images.unsplash.com/photo-1610575045175-6eaf903eb32a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJhZ29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'wolf',
      url: 'https://images.unsplash.com/photo-1588167056547-c183313da47c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29sZnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'mountain',
      url: 'https://images.unsplash.com/photo-1563253197-d086cc343dd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'dragon',
      url: 'https://images.unsplash.com/photo-1610575045175-6eaf903eb32a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJhZ29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'wolf',
      url: 'https://images.unsplash.com/photo-1588167056547-c183313da47c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29sZnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'mountain',
      url: 'https://images.unsplash.com/photo-1563253197-d086cc343dd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'dragon',
      url: 'https://images.unsplash.com/photo-1610575045175-6eaf903eb32a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJhZ29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'wolf',
      url: 'https://images.unsplash.com/photo-1588167056547-c183313da47c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29sZnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ];

  // onPageChange(i: number) {
  //   this.currentPage = i;
  // }
  //
  // onNext() {
  //   this.currentPage++;
  // }
  //
  // onPrevious() {
  //   this.currentPage--;
  // }
  checkIndex(i: number) {
    return Math.abs(this.currentPage - i) < this.pagerItems;
  }
}
