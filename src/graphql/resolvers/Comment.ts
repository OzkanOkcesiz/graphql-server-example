export const Comment = {
  user: (parent: { user_id: string; }, __: any, { db }: any) => db.users.find((user: { id: string; }) => user.id === parent.user_id),
  post: (parent: { post_id: string; }, __: any, { db }: any) => db.posts.find((post: { id: string; }) => post.id === parent.post_id),
};
