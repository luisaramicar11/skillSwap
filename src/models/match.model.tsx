export interface IPerson {
    fullName: string;
    jobTitle: string;
    imageUrl: string;
  }
  
  export interface ISliderCardProps {
    person: IPerson;
    onPass: () => void;
  }