import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
    selector: 'app-users-details',
    templateUrl: './users-details.component.html',
    styleUrls: ['./users-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersDetailsComponent implements OnInit {
    user: UserInterface;
    constructor(private route: ActivatedRoute, private router: Router, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.user = data.user;
            this.cdr.markForCheck();
        });
    }

    showRoles() {
        this.router.navigate(['roles'], {relativeTo: this.route});
    }

}
