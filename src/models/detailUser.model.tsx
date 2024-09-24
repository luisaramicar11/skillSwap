import { IUserCardProps } from "./userCards.model";
import { IUser } from "./user.model";

export interface IRequestOnDetailUserCardProps {
    userData: IUserCardProps;
    userDetail?: IUser;
}