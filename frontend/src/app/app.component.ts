import { Component } from '@angular/core';

@Component({
  selector: 'ape-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onActivate(): void {
    window.scroll(0, 0);
  }
}
