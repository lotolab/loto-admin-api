type LotoAppListener = {
  name: string;
  url: string;
};

type LocaleType = 'enUS' | 'zhCN';

type BizErrorOptionType = {
  locale?: LocaleType;
  error?: string | string[];
} & Record<string, string | number>;

type IAccessBase = {
  id: number;
};

type ITokenBase = {
  iat: number;
  exp: number;
  iss: string;
  aud: string; // 受众
  sub: string; // 主题
};

type JwtAccessPayload = {
  username: string;
  version: string;
  platform: number;
  state: string;
} & IAccessBase &
  Partial<ITokenBase>;
