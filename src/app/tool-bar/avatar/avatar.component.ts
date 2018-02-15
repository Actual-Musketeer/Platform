import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
    @Input() public photoUrl: string;
    @Input() public name: string;

    constructor() {
        this.photoUrl = '';
    }
}
