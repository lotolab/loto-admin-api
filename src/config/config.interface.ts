export interface IJwtConfigSchema {
  version: string;
  iss: string;
  sub: string;
  secretKey: string;
  expirein?: string;
  encryptRounds?: number;
}
