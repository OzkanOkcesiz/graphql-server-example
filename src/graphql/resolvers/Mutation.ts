import { nanoid } from "nanoid";

export const Mutation = {
    //User
    createUser: (_: any, { data }: any, { pubsub, db }:any ) => {
      const user = {
        id: nanoid(6),
        ...data,
      };
      db.users.push(user);
      pubsub.publish("userCreated", { userCreated: user });
      return user;
    },
    updateUser: (_: any, { id, data }: any, { pubsub, db }: any) => {
      const user_index = db.users.findIndex((user: { id: string; }) => user.id === id);

      if (user_index === -1) {
        throw new Error("User not found.");
      }

      const updated_user = (db.users[user_index] = {
        ...db.users[user_index],
        ...data,
      });

      pubsub.publish("userUpdated", { userUpdated: updated_user });

      return updated_user;
    },
    deleteUser: (_: any, { id }: any, { pubsub, db }: any) => {
      const user_index = db.users.findIndex((user: { id: string; }) => user.id === id);

      if (user_index === -1) {
        throw new Error("User not found.");
      }
      const deleted_user = db.users[user_index];
      db.users.splice(user_index, 1);

      pubsub.publish("userDeleted", { userDeleted: deleted_user });

      return deleted_user;
    },
    deleteAllUsers: (_: any, __: any, { db }: any) => {
      const length = db.users.length;
      db.users.splice(0, length);

      return {
        count: length,
      };
    },

    //Post
    createPost: (_: any, { data }: any, { pubsub, db }: any) => {
      const post = {
        id: nanoid(6),
        ...data,
      };
      db.posts.unshift(post);

      pubsub.publish("postCreated", { postCreated: post });
      pubsub.publish("postCount", { postCount: db.posts.length });

      return post;
    },
    updatePost: (_: any, { id, data }: any, { pubsub, db }: any) => {
      const post_index = db.posts.findIndex((post: { id: string; }) => post.id === id);

      if (post_index === -1) {
        throw new Error("Post not found.");
      }

      const updated_post = (db.posts[post_index] = {
        ...db.posts[post_index],
        ...data,
      });

      pubsub.publish("postUpdated", { postUpdated: updated_post });

      return updated_post;
    },
    deletePost: (_: any, { id }: any, { pubsub, db }: any) => {
      const post_index = db.posts.findIndex((post: { id: string; }) => post.id === id);

      if (post_index === -1) {
        throw new Error("Post not found.");
      }
      const deleted_post = db.posts[post_index];
      db.posts.splice(post_index, 1);

      pubsub.publish("postDeleted", { postDeleted: deleted_post });
      pubsub.publish("postCount", { postCount: db.posts.length });
      return deleted_post;
    },
    deleteAllPosts: (_: any, __: any, { pubsub, db }: any) => {
      const length = db.posts.length;
      db.posts.splice(0, length);

      pubsub.publish("postCount", { postCount: db.posts.length });

      return {
        count: length,
      };
    },

    //Comment
    createComment: (_: any, { data }: any, { pubsub, db }: any) => {
      const comment = {
        id: nanoid(6),
        ...data,
      };
      db.comments.push(comment);

      pubsub.publish("commentCreated", { commentCreated: comment });

      return comment;
    },
    updateComment: (_: any, { id, data }: any, { pubsub, db }: any) => {
      const comment_index = db.comments.findIndex((comment: { id: string; }) => comment.id === id);

      if (comment_index === -1) {
        throw new Error("Comment not found");
      }

      const updated_comment = (db.comments[comment_index] = {
        ...db.comments[comment_index],
        ...data,
      });

      pubsub.publish("commentUpdated", { commentUpdated: updated_comment });

      return db.comments[comment_index];
    },
    deleteComment: (_: any, { id }: any, { pubsub, db }: any) => {
      const comment_index = db.comments.findIndex((comment: { id: string; }) => comment.id === id);

      if (comment_index === -1) {
        throw new Error("Comment not found.");
      }
      const deleted_comment = db.comments[comment_index];
      db.comments.splice(comment_index, 1);

      pubsub.publish("commentDeleted", { commentDeleted: deleted_comment });

      return deleted_comment;
    },
    deleteAllComments: (_: any, __: any, { db }: any) => {
      const length = db.comments.length;
      db.comments.splice(0, length);

      return {
        count: length,
      };
    },
  }