import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
    selector: 'app-users-details',
    templateUrl: './users-details.component.html',
    styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
    user: UserInterface;
    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.user = data.user;
        });
    }

    showRoles() {
        this.router.navigate(['roles'], {relativeTo: this.route});
    }

}
