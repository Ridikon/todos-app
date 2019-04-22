import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersService } from '../../users.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
    users: UserInterface[];
    constructor(private userService: UsersService, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.users = this.userService.getUsers();
        this.cdr.markForCheck();
    }
}
