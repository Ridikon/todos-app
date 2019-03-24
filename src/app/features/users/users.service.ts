import { UserInterface } from './interfaces/user.interface';

export class UsersService {
    users: UserInterface[] = [
        {
            name: 'Vasya',
            age: 40,
            id: 1,
            roles: {
                write: true,
                read: true
            }
        },
        {
            name: 'Petya',
            age: 40,
            id: 2,
            roles: {
                write: false,
                read: false
            }
        }
    ];
    getUsers(): UserInterface[] {
        return this.users;
    }
    getUser(id: number): UserInterface {
        let user: UserInterface;
        this.users.forEach((item: UserInterface) => {
            if (item.id === id) {
                user = item;
            }
        });
        return user;
    }
}
