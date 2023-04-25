import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  stringserverOn: string = '';

  constructor() {
    //arrow Function
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  serverOn() {
    this.stringserverOn = 'Server is online ';
  }

  ngOnInit() {}
}
