import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'team',
  exposes: {
    './Module': 'apps/mfe/team/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
