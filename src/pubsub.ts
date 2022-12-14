import { RedisPubSub } from 'graphql-redis-subscriptions';
import  Redis  from 'ioredis';

import dotenv from "dotenv";

dotenv.config();

const options: any = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  retryStrategy: (times: number) => {
    // reconnect after
    return Math.min(times * 50, 2000);
  }
};

export const pubsub = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options)
});
