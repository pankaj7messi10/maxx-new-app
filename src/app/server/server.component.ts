import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {

    userName: string = "John Doe";

    resetUserName() {
        this.userName = "";
    }
}