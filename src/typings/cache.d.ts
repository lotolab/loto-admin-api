type CacheRedisConfigSchema = {
  host: string;
  port: number;
  db: number;
  passport?: string;
  username?: string;
  ttl?: number;
};

type BuildRedisBizKeyFn = (...args: Array<string | number>) => string;
