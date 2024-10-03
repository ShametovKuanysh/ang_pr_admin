import { Component, OnInit } from '@angular/core';
import { Field, Post } from '../../interfaces/post.interface';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { NumarrayPipe } from "../../pipes/numarray.pipe";
import { SpecTableComponent } from "../spec-table/spec-table.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, NumarrayPipe, SpecTableComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  // providers: [PostsService]
})
export class PostsComponent implements OnInit {
  fields: Field[] = [
    {title: 'Post', code: 'title'},
    {title: 'Body', code: 'body'}
  ]
  
  // posts!: Post[]
  // page: number = 1
  // perPage: number = 25
  // totalPages: number = 0
  // loading: boolean = false

  constructor() {}
  // private postService: PostsService
  ngOnInit(): void {
    // this.loading = true
    // this.postService.getPosts().subscribe((posts: Post[]) => {
    //   this.posts = posts
    //   this.totalPages = Math.ceil(posts.length / this.perPage)
    //   this.loading = false
    // });
  }

  // moveToPage(page: number){
  //   this.page = page
  // }
}
