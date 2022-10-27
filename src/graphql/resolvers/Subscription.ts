import { withFilter } from "graphql-yoga";

export const Subscription = {
  //User
  userCreated: {
    subscribe: (_: any, __: any, { pubsub }: any) => pubsub.asyncIterator("userCreated"),
  },
  userUpdated: {
    subscribe: (_: any, __: any, { pubsub }: any) => pubsub.asyncIterator("userUpdated"),
  },
  userDeleted: {
    subscribe: (_: any, __: any, { pubsub }: any) => pubsub.asyncIterator("userDeleted"),
  },

  //Post
  postCreated: {
    subscribe: withFilter(
      (_, __, { pubsub }) => pubsub.asyncIterator("postCreated"),
      (payload, variables) => {
        return variables.user_id
          ? payload.postCreated.user_id === variables.user_id
          : true;
      }
    ),
  },
  postUpdated: {
    subscribe: (_: any, __: any, { pubsub }: any) => pubsub.asyncIterator("postUpdated"),
  },
  postDeleted: {
    subscribe: (_: any, __: any, { pubsub }: any) => pubsub.asyncIterator("postDeleted"),
  },
  postCount: {
    subscribe: (_: any, __: any, { pubsub, db }: any) => {
      setTimeout(() => {
        pubsub.publish("postCount", { postCount: db.posts.length });
      });

      return pubsub.asyncIterator("postCount");
    },
  },

  //Comment
  commentCreated: {
    subscribe: withFilter(
      (_, __, { pubsub }) => pubsub.asyncIterator("commentCreated"),
      (payload, variables) => {
        console.log("payload", payload);
        console.log("variables", variables);
        return variables.post_id
          ? payload.commentCreated.post_id === variables.post_id
          : true;
      }
    ),
  },
  commentUpdated: {
    subscribe: (_: any, __: any, { pubsub }: any) => pubsub.asyncIterator("commentUpdated"),
  },
  commentDeleted: {
    subscribe: (_: any, __: any, { pubsub }: any) => pubsub.asyncIterator("commentDeleted"),
  },
};
