export const LotoModuleRoutes: Record<string, LotoModuleRouteType> = {
  auth: {
    name: 'Authentication API',
    modulePath: 'auth',
    desc: '登录鉴权模块',
  },
  mock: {
    name: 'Mock API',
    modulePath: 't',
    desc: '测试模块,只有在STAGE= dev 模式下可以调用',
  },
};
