export interface IUserCardProps {
    id: number;
    fullName: string;
    jobTitle: string;
    qualification: number;
    countMatches: number;
    description: string;
    abilities: string;
    imageUrl: string;
}

export interface IAllUsersCardsProps {
users: IUserCardProps[]
}

export interface IProfileCardProps {
    fullName: string;
    userSkills: IUserCardProps;
  }
  