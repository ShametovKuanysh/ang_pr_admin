import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  providers: [PostsService]
})
export class PostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private postsService: PostsService, private router: Router){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.postForm = this.fb.group({
      id: [{id, disabled: true}],
      userId: [''],
      title: [''],
      body: [''],
    })

    if (id){
      this.postsService.getPostById(id).subscribe((post: Post) => {
        this.postForm.patchValue(post)
      })
    }
  }

  updatePost(){
    this.postsService.updatePost(this.postForm.value).subscribe((post: Post) => {
      this.postForm.patchValue(post)
      this.postForm.markAsPristine();
      this.postForm.markAsUntouched();
    })
  }

  bind(){
    this.postsService.getPostById(this.postForm.value.id).subscribe((post: Post) => {
      this.postForm.patchValue(post)
    })
  }
}
