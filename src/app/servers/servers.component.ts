import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //use backtick for template
  template: ` <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {}
