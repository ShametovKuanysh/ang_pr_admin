import { Component } from '@angular/core';
import { Field } from '../../interfaces/post.interface';
import { SpecTableComponent } from '../spec-table/spec-table.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SpecTableComponent, HttpClientModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  fields: Field[] = [
    {title: 'Name', code: 'name'},
    {title: 'Username', code: 'username'},
    {title: 'Email', code: 'email'},
    {title: 'Phone', code: 'phone'},
    {title: 'Website', code: 'website'}
  ];
}
