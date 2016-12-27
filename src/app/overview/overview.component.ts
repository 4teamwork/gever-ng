import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
    templateUrl: './overview.component.html'
})

export class OverviewComponent {

    private dossiers: any[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.dossiers().subscribe(data => {
          this.dossiers = data.items;
        });
    }
}
