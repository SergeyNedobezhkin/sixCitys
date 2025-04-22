
export type Review = {
  id: string;
  avatar: string;
  rating: number;
  date: any;
  comment: string;
  user: {
    avatarUrl: string;
    isPro: boolean;
    name: string
  }
}

