export const Query = {
  //Users
  users: (_: any, __: any, { db }: any) => db.users,
  user: (_: any, args: { id: string; }, { db }: any) => db.users.find((user: { id: string; }) => user.id === args.id),

  //Posts
  posts: (_: any, __: any, { db }: any) => db.posts,
  post: (_: any, args: { id: string; }, { db }: any) => db.posts.find((post: { id: string; }) => post.id === args.id),

  //Comments
  comments: (_: any, __: any, { db }: any) => db.comments,
  comment: (_: any, args: { id: string; }, { db }: any) =>
    db.comments.find((comment: { id: string; }) => comment.id === args.id),
};
