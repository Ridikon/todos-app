import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
    selector: 'app-users-roles',
    templateUrl: './users-roles.component.html',
    styleUrls: ['./users-roles.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersRolesComponent implements OnInit {
    user: UserInterface;
    constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.route.parent.data.subscribe(data => {
            this.user = data.user;
            this.cdr.markForCheck();
        });
    }
}
