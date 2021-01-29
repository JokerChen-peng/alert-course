import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611226078159_507';

  // add your config here
  config.middleware = [];
  config.url='https://oapi.dingtalk.com/robot/send?access_token=7c221d00f21f49d563dd62e4e1663f17bde5355d896bdd684c84329d5102ddd7';
  return config
};
