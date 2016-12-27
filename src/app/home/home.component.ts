import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent {
    currentUser: string;

    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
}
