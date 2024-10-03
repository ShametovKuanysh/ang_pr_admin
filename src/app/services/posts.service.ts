import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { Observable } from 'rxjs';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  
  addPost(post: Post){
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
  }

  updatePost(post: Post): Observable<Post>{
    return this.http.put<Post>(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
  }

  deletePost(id: number): Observable<void>{
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
