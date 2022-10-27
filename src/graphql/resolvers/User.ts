export const User = {
    posts: (parent: { id: string; }, __: any, { db }: any) => db.posts.filter((post: { user_id: string; }) => post.user_id === parent.id),
    comments: (parent: { id: string; }, __: any, { db }: any) =>
      db.comments.filter((comment: { user_id: string; }) => comment.user_id === parent.id),
  }
