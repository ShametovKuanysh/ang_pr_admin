import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { UsersComponent } from './components/users/users.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    {path: 'posts', component: PostsComponent},
    {path: 'posts/:id', component: PostComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/:id', component: UserComponent},
    {path: 'comments', component: CommentsComponent},
    {path: 'comments/:id', component: CommentComponent},
];
