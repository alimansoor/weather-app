import { Component, OnInit } from '@angular/core';
import { Form } from './form';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  formModel = new Form('Melbourne')

  constructor(private _router: Router, ) { }

  ngOnInit() {
  }

  onSubmit() {
    this._router.navigate(['/dashboard', this.formModel.location]);
  }

}
