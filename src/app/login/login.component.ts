import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    returnUrl: string;
    model: any = {};
    error: any = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    logout() {
        this.authenticationService.logout();
    }

    login() {
        this.authenticationService.login(this.model.username, this.model.password).subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error =>  {
                this.error = error.json().error;
            }
        );
    }
}
