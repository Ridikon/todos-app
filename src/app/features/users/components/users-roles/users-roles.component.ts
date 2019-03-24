import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
    selector: 'app-users-roles',
    templateUrl: './users-roles.component.html',
    styleUrls: ['./users-roles.component.scss']
})
export class UsersRolesComponent implements OnInit {
    user: UserInterface;
    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.user = this.route.parent.snapshot.data.user;
    }
}
