import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  
  @Input()
  posts:Post[] = [];

  ngOnInit(): void {
  }
  
}
