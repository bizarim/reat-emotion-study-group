import { Config } from './types';

export const defaultConfig: Config = {
    apiService: {
        auth: '',
        product: 'http://localhost:9002/api/v2/product',
    },
    withCredentials: true,
    basicToken: '',
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

export const auth = () => AppBase.config.apiService.auth;
export const withCredentials = () => AppBase.config.withCredentials;
export const basicToken = () => AppBase.config.basicToken;
