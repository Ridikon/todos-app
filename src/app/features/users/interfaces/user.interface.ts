export interface UserInterface {
    name: string;
    age: number;
    id: number;
    roles: {write: boolean, read: boolean};
}
