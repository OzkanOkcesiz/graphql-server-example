export const Query = {
  //Users
  users: (_: any, __: any, { db }: any) => db.users,
  user: (_: any, args: { id: any; }, { db }: any) => db.users.find((user: { id: any; }) => user.id === args.id),

  //Posts
  posts: (_: any, __: any, { db }: any) => db.posts,
  post: (_: any, args: { id: any; }, { db }: any) => db.posts.find((post: { id: any; }) => post.id === args.id),

  //Comments
  comments: (_: any, __: any, { db }: any) => db.comments,
  comment: (_: any, args: { id: any; }, { db }: any) =>
    db.comments.find((comment: { id: any; }) => comment.id === args.id),
};

// module.exports.Query = Query;
