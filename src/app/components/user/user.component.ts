import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  providers: [DataService] 
})
export class UserComponent implements OnInit {
  usersForm!: FormGroup;
  id!: number

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private dataService: DataService, private router: Router){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.usersForm = this.fb.group({
      id: [this.id],
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
      website: [''],
      address: this.fb.group({
        street: [''],
        suite: [''],
        city: [''],
        zipcode: [''],
        geo: this.fb.group({
          lat: [''],
          lng: [''],
        })
      }),
      company: this.fb.group({
        name: [''],
        catchPhrase: [''],
        bs: [''],
      })
    })

    if (this.id > 0) this.bind()
  }


  updateUser(){
    if (this.id > 0) {
      this.dataService.updateData('users', this.usersForm.value).subscribe((user) => {
        this.usersForm.patchValue(user)
        this.usersForm.markAsPristine();
        this.usersForm.markAsUntouched();
      })
    } else {
      this.dataService.addData('users', this.usersForm.value).subscribe((user) => {
        this.router.navigate(['users',user.id])
      })
    }
  }

  bind(){
    this.dataService.getDataById('users', this.id).subscribe(data => {
      this.usersForm.patchValue(data)
    })
  }
}
