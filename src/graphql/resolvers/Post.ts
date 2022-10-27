export const Post = {
    user: (parent: { user_id: string; }, __: any, { db }: any) => db.users.find((user: { id: string; }) => user.id === parent.user_id),
    comments: (parent: { id: string; }, __: any, { db }: any) =>
      db.comments.filter((comment: { post_id: string; }) => comment.post_id === parent.id),
  }
