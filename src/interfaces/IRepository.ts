import IUser from './IUser';

export default interface IRepository {
	getAll(): Promise<IUser[]>;
	getById(id: number): Promise<IUser | undefined>;
	create(user: IUser): Promise<void>;
	update(user: IUser): Promise<void>;
	delete(id: number): Promise<void>;
	getByEmail(email: string): Promise<IUser | undefined>;
	getByEmailAndPassword(
		email: string,
		password: string
	): Promise<IUser | undefined>;
}
