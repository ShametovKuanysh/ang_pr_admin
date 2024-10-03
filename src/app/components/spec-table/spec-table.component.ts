import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Field, IMain } from '../../interfaces/post.interface';
import { NumarrayPipe } from "../../pipes/numarray.pipe";
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-spec-table',
  standalone: true,
  imports: [RouterModule, CommonModule, NumarrayPipe],
  templateUrl: './spec-table.component.html',
  styleUrl: './spec-table.component.scss',
  providers: [DataService]
})
export class SpecTableComponent implements OnInit {
  data!: IMain[]
  @Input() fields!: Field[]
  @Input() title!: string

  page: number = 1
  perPage: number = 25
  totalPages: number = 0
  loading: boolean = false

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.bind()
  }

  bind(){
    this.loading = true
    this.dataService.getData(this.title).subscribe(json => {
      this.data = json
      this.totalPages = Math.ceil(this.data.length / this.perPage)
      this.loading = false
    })
  }

  moveToPage(page: number){
    this.page = page
  }

  deleteData(id: number): void {
    this.dataService.deleteData(this.title, id).subscribe(() => {
      this.bind()
    })
  }

  addData(){
    this.router.navigate([this.title, '0'])
  }
}
