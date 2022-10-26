export const Post = {
    user: (parent: { user_id: any; }, __: any, { db }: any) => db.users.find((user: { id: any; }) => user.id === parent.user_id),
    comments: (parent: { id: any; }, __: any, { db }: any) =>
      db.comments.filter((comment: { post_id: any; }) => comment.post_id === parent.id),
  }

  // module.exports.Post = Post;