import { Config } from './types';

export const defaultConfig: Config = {
    apiService: {
        auth: '',
        product: 'http://localhost:9002/api/v1/product',
    },
    withCredentials: false,
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
export const product = () => AppBase.config.apiService.product;
export const withCredentials = () => AppBase.config.withCredentials;
export const basicToken = () => AppBase.config.basicToken;
