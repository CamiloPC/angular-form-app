import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './register-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class RegisterPageComponent { }
