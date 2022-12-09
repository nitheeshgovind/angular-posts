import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  showPostCreation:boolean = false;
  post:Post = new Post();

  @Output()
  onPostCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  displayPostCreation(){
    this.showPostCreation = true;
  }

  createPost(){
    if(this.post.title != '' && this.post.content != ''){
      // Post
      this.onPostCreated.emit(this.post);
      this.post = new Post();
      this.showPostCreation = false;
    }
  }

}
