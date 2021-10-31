export interface IUserData {
  user: IUser;
  children: IUser[];
}

export interface IUser {
  name: string;
  age: string;
}
