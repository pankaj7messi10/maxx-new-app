import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverId : number = 5;
  serverStatus : string = 'offline';
  allowNewServer = false;
  serverCreationStatus : string = "No server available";
  serverName :string;

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  onInputChange(event:Event) {
    let target = event.target;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  setServerStatus() {
    this.serverCreationStatus = "Server is created";
  }
}
