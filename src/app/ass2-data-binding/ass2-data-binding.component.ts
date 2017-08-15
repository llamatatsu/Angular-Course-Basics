import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass2-data-binding',
  templateUrl: './ass2-data-binding.component.html',
  styleUrls: ['./ass2-data-binding.component.css']
})
export class Ass2DataBindingComponent implements OnInit {
  userName = '';

  constructor() { }

  ngOnInit() {
  }

  resetUserName()
  {
      this.userName = '';
  }
}
