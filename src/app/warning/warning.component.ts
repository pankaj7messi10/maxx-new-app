import { Component } from "@angular/core";

@Component({
selector: 'app-warning',
    template: `<h3>Hi. This is a warning message!</h3>`,
    styles : [`h3{
    color: red
    }`]
})
export class WarningComponent {

}