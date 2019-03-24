import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { UserInterface } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Injectable()
export class UsersResolver implements Resolve<UserInterface> {
    constructor(private userService: UsersService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserInterface {
        const id = +route.params.id;
        const user = this.userService.getUser(id);
        return user;
    }
}
