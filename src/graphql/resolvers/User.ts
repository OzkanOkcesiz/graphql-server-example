export const User = {
    posts: (parent: { id: any; }, __: any, { db }: any) => db.posts.filter((post: { user_id: any; }) => post.user_id === parent.id),
    comments: (parent: { id: any; }, __: any, { db }: any) =>
      db.comments.filter((comment: { user_id: any; }) => comment.user_id === parent.id),
  }

  // module.exports.User = User;