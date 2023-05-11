import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showDetail: boolean = false;
  textPassword: string = 'SecretPassword';
  dateArray: string[] = [];

  public visualizza() {
    let date = new Date();
    this.dateArray.push(date.toISOString());
    this.showDetail = true;
    this.textPassword = 'tuna';
  }
}
