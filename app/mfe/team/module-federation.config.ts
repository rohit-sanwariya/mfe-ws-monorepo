import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'team',
  exposes: {
    './Module': 'app/mfe/team/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
