type LotoModuleRouteType = {
  name: string;
  modulePath: string;
  desc?: string;
} & Record<string, any>;

type LotoResponseType<T = any> = {
  code: number;
  message: string;
  result?: T | undefined;
  error?: string | string[] | object | undefined;
  localeMessage?: string;
};

type IQueryOptions = {
  readonly page?: number;
  readonly pageSize?: number;
};

type QueryListResponseType<T = any> = {
  page: number;
  pageSize: number;
  total: number;
  pageCount?: number;
  list?: T[];
};
