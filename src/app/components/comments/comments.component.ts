import { Component } from '@angular/core';
import { Field } from '../../interfaces/post.interface';
import { SpecTableComponent } from '../spec-table/spec-table.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [SpecTableComponent, HttpClientModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  fields: Field[] = [
    {title: 'Name', code: 'name'},
    {title: 'Body', code: 'body'},
    {title: 'Email', code: 'email'}
  ];

}
