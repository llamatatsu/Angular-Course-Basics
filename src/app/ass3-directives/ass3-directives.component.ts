import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3-directives',
  templateUrl: './ass3-directives.component.html',
  styles: [`
            .after5thClick
            {
              color: white;
            }`]
})
export class Ass3DirectivesComponent implements OnInit {
  paragraphVisible = true;
  buttonClicks = [];

  constructor() { }

  ngOnInit() {
  }

  displayParagraph()
  {
      this.paragraphVisible = !this.paragraphVisible;
      // this.buttonClicks.push(this.buttonClicks.length + 1);
      this.buttonClicks.push(new Date());
  }  
}
