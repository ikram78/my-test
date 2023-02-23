interface User {
    id: number;
    name: string;
    email: string;
    userClicks:(id:number)=>void
  }
  interface Post {
    id: number;
    title: string;
    body: string;
  }
  export type {
    User,
    Post
  }
   