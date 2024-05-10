import * as chalk from 'chalk';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import { configStageKV } from './config.constants';

const envMode = process.env.STAGE || 'prod';

export * from './config.constants';
export * from './config.interface';
export * from './config.schema';
export * from './typeorm.config.service';

export const isDevMode = () => configStageKV[envMode] === 'dev';

export default () => {
  const log = console.log;

  const envfilePath = join(
    process.cwd(),
    `./.conf/${configStageKV[envMode]}.yml`,
  );

  log(chalk.blueBright(`Start loading configuration file: ${envfilePath}`));

  return yaml.load(readFileSync(envfilePath, 'utf-8')) as Record<string, any>;
};
