export const Comment = {
  user: (parent: { user_id: any; }, __: any, { db }: any) => db.users.find((user: { id: any; }) => user.id === parent.user_id),
  post: (parent: { post_id: any; }, __: any, { db }: any) => db.posts.find((post: { id: any; }) => post.id === parent.post_id),
};

// module.exports.Comment = Comment;
