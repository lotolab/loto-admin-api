import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IWxaiSDKConfig } from '../../wxai/lib/interfaces/wxai.interface';
import WxaiClient, { WxaiClientType } from '../../wxai/lib/wxai-client';
import { BCE_WXAI_CLIENT } from '../../wxai/lib/wxai-constants';

export const WxaiClientFactory: FactoryProvider<Promise<WxaiClientType>> = {
  provide: BCE_WXAI_CLIENT,
  useFactory: async (config: ConfigService) => {
    const options = config.get<IWxaiSDKConfig>('bce.wxai', null);

    if (!options) throw new Error(`BCE wxai configuration invalid.`);

    const client = await WxaiClient.createClient(options);
    return client;
  },
  inject: [ConfigService],
};
