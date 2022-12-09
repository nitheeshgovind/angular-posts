import { Component } from '@angular/core';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  posts: Post[] = [];

  title = 'angular-posts';

  getNewlyCreatedPost(post:Post) {
    this.posts.push(post);
  }
}
