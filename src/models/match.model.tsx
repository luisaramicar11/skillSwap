import { IUserCardProps } from "./userCards.model";
export interface ISliderCardProps {
    user: IUserCardProps;
    onPass: () => void;
  }