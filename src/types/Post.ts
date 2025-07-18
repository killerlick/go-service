export interface Post {
    _id: string;
    user_id : string;         // généré automatiquement par MongoDB
    title: string;
    description: string;
    image: string;
  }