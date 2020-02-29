import { Config } from './types';

export const defaultConfig: Config = {
    api: {
        authUrl: '',
    },
    withCredentials: true,
};

export const AppBase = {
    config: defaultConfig,
};

declare global {
    interface Window {
        env: Config;
    }
}

window.env = window.env || defaultConfig;
AppBase.config = { ...window.env };

export const authUrl = () => AppBase.config.api.authUrl;
export const withCredentials = () => AppBase.config.withCredentials;
