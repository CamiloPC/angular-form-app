import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switches-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './switches-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SwitchesPageComponent { }
