import { IUserCardProps } from "./userCards.model";
export interface ISliderCardProps {
    person: IUserCardProps;
    onPass: () => void;
  }